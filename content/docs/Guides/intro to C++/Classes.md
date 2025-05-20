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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PEBUXSU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzzfgkWDhAg1Z5wvkYJLXnvpbkh6P9d242Lnv7sipIPwIhAPSUuoOSM17vj2SawS%2FWIUMEMxSaRVOqLBGICwdu%2BdqVKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6go0dkCXvNzBfBigq3AMTaQlHU8G%2BPFv6jy8UxyAR8NzM0OBJ1asnE6AhU%2BAszBUaqV%2FonMTCDdyp2SMNrFGnWjQCQHUSlcGMSO8Szm%2BUyTjtgVflb2NJ4PoxED2W50DZM0T442Xn9AzQk%2B%2BLkRANZAVzFflafkSg54TUUiLbap6wXNE%2BDbOon03MSI4dxTNimHF8PHRWG3yiUVQM6KtMRXS3%2FoTsSf7t3wVUKXD2mKVOd7BZW73adv4SjxvG%2Bipp%2BwhTXUgDi2MOxKTZbmtZqzsAAqXGRQuCDjrXlSA%2BkLcJmErAqiIxVjmzyj4aRKWz5Y02Dso6927f5WnJaLUNztGTF051Vq5zQVjDdLbS0IpfFYg1KoukTeHqiqgFVGg7GEVUVj7DR4mco0VKgHsTSLinCfBRtDHuvFsTN0tr%2FSNkpyKXoBI2tKn4Oy9GiPaBzLs4l9BvnbZ%2FUM0uIDje5z0PBRph5O3y8qwbhAQDXm2MiyCRSSFiOgYGY8Vu9RAgoNULJDiAAbIMhdYh3FUX8VevFKf2DAPtGrcuhe4ZUDmmbI7vltPlqAItB8cAK7oSWYPxk6DVyTr%2FcT0Cv1ql4jR77Fx%2F5lS5I5jvnWO4kBGLqZ2Wn1tEG65zOtsK%2BUMTF7%2FNa8PJs9WDLjDNxrDBBjqkAefRu1ykvwHt%2BJgpAjzpWf76cX1UmlDw5fmSHrjDNutOhXg6%2Fsuk5P1mPg8x4f7nRzImoZSPmXO0gL4MqspGADcTn74%2BFqkXFFgpRT3Mg6gRCkJcW1VNyq8i9NJcrMVTkLK10XoKbT0OzNblrkdUy7OOydZrzQvJIufYF2EL%2BTu808dJJQFlEoQEYJ7u%2F58IYubLkHt6hnVI6xn6xr6%2BIKne5ean&X-Amz-Signature=530e4778bedf0f9aaf3e2da591cf9b15ec13287cc7ce2e35889b043fedd252b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
