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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I2T3S4X%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR%2BsCqcIZpTnSDP39dyT6ZSJLyzu92xHTWp8REpK%2FlVQIgC507e0k%2F4DYFfFttul6qzRgfjkD0zdPMjzR01YcPyUAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNidujnass69T6KznyrcA%2Fr0vT7gdkYkqKDXjyoj%2FPU9FIOGdjf8c2SxQa6Wv5%2F759HqoMpQep80GB8UILBvmP90hbd%2BfkBByq2BCLiVJsaubwsjd4Far1rkk4loSa8CUkHlcGMyJWEiBZbb8ED%2Fph4GiUgrnwbP8%2Bf%2BozXDbUC07SdsiYo0CaKE6Npoiu0EySE8urcIUJ9VASTi2NcE1YtzlVJ21f6cHxjiRAkvBxCZAmoKi7Ou2%2FyeyN4Ud6dUjtww%2FjHlBsMscT1ICUqWQ2%2F3sNwyLzccmzKAqFB4qsYLAQMelQHcwdu21%2BEBjevlI5aK22WiEl%2BjFSrk3KU28Fi8Nz6OFtBgx4f%2Bi9xXImbVdEGG4FDX%2FgbR89QMXoe7%2FPYHu11hWqTNR4Mk6nlgrvtBeYJ5Ex0XRgD0gfrHwtLtQuOruZOIq2tMP7WieDq0jCER%2BLBWnoNF7DSOXPNwF4vl2YniUi6oukwpujSna46IPfkrwG35Dqbcioqqo4UR0cHYYwPl%2BwKSl835JWI%2Ff7YYrkoJGDcccTW8oLj9diAJst0WT2h7sseohh8oYW0UUcL72TgfxOGVdJHfz4Xdz6chWQrqYWd0TWXX38tPZtz2rGpXuK1%2FDc98xvBhSR50xolkuvDG%2B%2FXzTUnJMOLcrsQGOqUBkWkcHstwRvu7xEojQz%2FpaI7Jx0w3DDOyarusApPHslslWS2Kqhh%2Fb2%2Bc5bbwSfCav8wipVkCgQSyywlBbN610f%2FZtNkdraNzp78W%2BXE5Eok1tg5k90crBtAOmbmNa8UMqOBcisAJq8nYelOeX3hu8T8O9yKgJCTVUH3EMKjSfvtu5mzyBBZlK0YE4WSVcWRWvWIOXza83IaDiNNzXmhv1zjGw4XT&X-Amz-Signature=d998c60523b1ac59f7d611715193c25184e0ae2d547cc4fcb9789a23206cdef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
