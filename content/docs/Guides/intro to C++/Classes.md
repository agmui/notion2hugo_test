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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RTEEYIT%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD%2FEFTzx4LquoZWlzDrrxwdXoKbIRA8BsoYDwdFLCd3zgIhAKmrmxtBw%2F6OsUEFq6eK9pHz0%2FG7Fn85V4gxgtXkXtr0Kv8DCEoQABoMNjM3NDIzMTgzODA1IgzhGiIxdbmuQFzjhCwq3APdAma6l26F2VPa0%2FT87wgZ%2FxruUhXTvkftKSzcwuXiUONd6RT9kRgKeFncRCfasNKEWAz4tPi5PLEovlSm%2FtpwRtAYGAR9RvzD4hmRaRPedM2HJSdzWQ3qeCk%2FopeYIwiOZ7TEaABxw9959UXVj2x6rzRejmQUus8gC29gPJgnorQQHziaOd30fa8nEngdKBj7kqVaz3A44pPUDNKXCW2P234k1qxielbxzgKg8Ux%2Bpuxe6VxGdzCU1EduUflrRwAkNaBlowBtDHlYwWxckh6paMIVQweWx7De6SqsDnT2Ju1eMzzzxc53gqSupB3ZLqZtUKmPBykidxRL5n3UaTx%2FtskUL08cDELgVFpzK1BBtEm%2FwGQe5YR6COR9esJ%2BzHA7lRCMz4Yo%2BuE6UmEPXhduBPlJqAZ8dTncQ6NrsK4NIRgdrVizqK9%2FVYJukJieX4SpiMJtOtsIW1CSBqU4XifyeXsDZPzl9sRXSYXXK%2FH7IAtNSrnTzOAggxK0GaYbMOCBMEL80Fwgu4%2FVXIRtiF9OXZGQ32LuCd8fZN4aGGXSI4M31JKXHKfwZekQmGCPhSobrstE22yUQLoxV9YNu9aoP8S4w8GsLXUZpbEWGVDmonq85vMYEu318P%2F6gDCqn%2FjEBjqkAf9y0MVYUgDuYySXRf%2FoBLti3yGHlk7UiXh3wySJKDD1QiLHXAlLsCsEMVLUHpqaQHSN4BzPUIBEySH6tAZs%2F%2B8APDqkOEal22JubIsHqwAFhub9wT4SN%2BFBCcJAnIMJ3duZhQn0nFAHsSr7RE8pJfoXo2WBD27t%2BOixMvJlfpAWEQzuqOyWf6vTR94Y3ce2W6SRqQzbYmLuDXjKEB5SEdp4Xtfs&X-Amz-Signature=4c6c930f47f486963a65b8483432f8f22906795f30aef06f78d846e862daeeb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
