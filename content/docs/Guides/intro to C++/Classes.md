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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GJCWBNR%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGZcEM9Y00Kv6ubugmzH7cmX3T2fc2xEQOGOVbMqtg16AiBTbsojEypebdUtnu5Uxm2l%2BD%2B1R%2FG3lSEU55vs2yF87CqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVokk9HdAc9qHZrlYKtwDsKCdG4%2FUUYKk6PGVo0Bpd7AhzBLsMi2ELeVXWz6zkQ%2BjoGnPgI%2Fvlm7fcco%2FAuGEGbR3jK2veXnnGHCKeDHsXY9k%2BW%2FBj%2F1EpyfRTCaAXSjAHBs6KgLaYntoxK8DxCGvb1LdQBhbK0GHsQsbe%2Fp9WV7aCbWCOtDWY8t4GClDsYXBsrLjEHtBe%2F51yTVhK03qeg5XR0JxfmdjzzG%2Bbix8GsU1JOSuxJs9nD1hyU%2BOelj5sLWeW25zwUih46W%2FlLKHT3VmSlJ%2F19IMrtM22XA%2B6IcK970GHxNUrGeEX3%2FLKgTeap1hgg5E%2FslrxISaMPBRjBFYSSoRtF3qL0A%2FhTC48ATv7uC0U9ffJorndpB%2FmLwNDUIcroKYjfIXR6AHYGt0b5Jql%2B%2BpGyl3qQ9fXAMKewv%2FA2kY0kPKf7KHgAnXAa%2Fih8jX8G5VD98Fmk77XPStqSJLTBBS0jx7KoilNFphlUebjh9KIupmDsq2Ozg4wWYtQByiml8KVEbNifdJyG4kXny%2BJED%2F%2B0HOrhDZ9BTl9PE4XRJrmyYQMcc5fZIDiAZ0SlneJa4vFDS2%2B8u0qkkvCeyGuRmo5zVmRLMC4q1GSzRQp%2Fm%2B81CXUPZYAUBT5ESJpg9QQJc0elwgVxEwtYDzwQY6pgHsdcWJRQiPr22KPT2Kbu4PZjfXVSsKIjN8HcyB1SMx3VqywaUQV4VfDqxV5mOS2BlS6178iRU225wm3AUaqkiXcwduhlK3WrzeupS3M4YxKzdAKhF6FQMg950Bn8jbNHwTo0OHFMVveM4ZoWsho09nSgmr1QvVeAQxTRuCR0hDOgiqO1iJc8H8ticinI8VWf1EemkSENwNEjeg11oL%2B1EjiIRvdrV%2B&X-Amz-Signature=920049aef71f8477b500184f716bc780f38b65fc1ff3c8ac0fbad2c5e849630e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
