---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
      <summary>What is </summary>
       `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.
  </details>

## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N23U2QD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDXUqRxfbm9qoEBNo5zhBVLO1rNxfkHxgDGh1XGdar42QIhAK2EtpkMbjgXxvhzYvRKBakFCcncwRV114%2BAllwNNoVAKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxopE5CfhKR%2BoYz2eIq3ANmgIrz4nTYyO%2B60G78YBKQejfK5KvH%2BKojNmW63yFLQHEUu6Qoc1hX0RnSDheuLqIy2Ux94yfbF8V4MUNsFX0IvfTd%2FOMNhe105RwKv6%2F%2FS3ZIyegdGl4JngLm5nuMmhngVRIjgCJS%2F8R3%2BKAWsxTXWd9hq%2FFhT5YCeDb8ZXdZ5%2F980xY7WCCDEfACYy0ZRSOKwb3YHujldHxGT8CKKkUnr6T%2FPAMnhOGHDAmQ7L5wmDiqEtwLSiB9foTWlR6why6EIay3EWW8XECEOrR%2BSQAY8liisbGNHBM8viGmnzDKR%2F7k4GMFKbtxLMq0S9WmCNLnGo42HHC9Jy8%2FLQDb%2FQcaOlmLtucTViIAZB2fBOMpzg7lXRoNBvoFpWAEam3QPN2FHpK95zrxpgZLZJYzARuwlB5grBufkUvtFaCS0P8ryfNjxYRHpXhUgRIZCXgC3zbNSVlroXPPEnAAAGAQ1yOoIMIFXVok0ywQ3WO%2Bl9twLwxhZsv2Qo7Q3RQCt%2Bw%2FTGiGzcgkaokzghZTkSWwmFbTudMvEgj1BqbBTxR%2BpP3KHW2HhXy7ZWk%2Bkxik1Jv7PWuNhc7LoxdXmRKay35SYJpgitgQgEiIHVRW6ifPSBD2HOmxaQ3v9sj90ZCqzzC%2Fu4TBBjqkAYfY7mXX0pwlD%2BAEwYW%2F05SpddDbK8bj01rvdq97JSBGl8dYgaQbZdHCRx%2FilMKD3azHMGcAvXZo%2BDqbieNGIBqRgKTFrI%2BlC347Dpw8W6P2pcUWhLlBjtRa1neROnqK%2BphOCWC0kpLhpIG0XI16baGK%2FXNfEK6BpNzu0V%2F9tAjxjL9Ik4kzeCUe8JW3xYKniRkZFroTGZgh7o3iTYptNC5JvWCm&X-Amz-Signature=65719d6719cb7f9783ae2c389b934cf50c328300c91e379436ba02f7a3c970ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
