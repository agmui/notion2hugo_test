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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PROCB3I%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDdxmVX19lxTHZQc%2BEnosLbiiSSDNvnLkdkOIqXNCURRAIhAIL5ZbPajgSUFg7DOH3OCLO1m%2F3yH4LTCxQoFLTdkM9aKv8DCBwQABoMNjM3NDIzMTgzODA1Igzq5R8Wyd4THKOvHBwq3ANK9n0ZIUBHLFO5Wv5PB4wglbzTl9NFTlOEKRp2tR7jmTjBpfLbA%2FNDhHRhUaFsLxZDtAjZ%2BzsBdfxS4MzrG01hpPJtIdIQU%2FPlmGvEc5gKd6VFid0guEyCOP84ezaNlT155s9%2FDSFo2iLf3iTsoNB%2BYCn8MSoR5awE2kZBAvW6COxsFnE0oSQPeAuuoOHtCuuipFZk0wJUnbQEppG9nrpXtYRbaODH%2BsRdxu%2FktEsXL%2FOH0uqnM367HCJW%2BOYFs6gCDLZXPCPBzPUDSHulHJMhY1QAePi6B6rFfWRT03sC7DoI%2FB5KeFRCn8N0bV2zfpeRpmwKhFrzoPI0nhwVC40TwS%2FM5fjwWzRz%2B0uUpttd3rKAzFF6DL3YehmjwiNforiduYtOW%2BkpLztRnzbZmNxFPlxv6Ue0kk9S6BWK73tFpWnKpAqg537PzSjkBwzUF0NudIaUK4q0Uu0DqZT9KYXNRAQM2NR0hI0DDVPeN54uRXWPhDN1WZnWBgTaFPN47pQoeW%2BXNtjTS%2F7dabK%2F2pPCZzRcTdyhwm3Vlj5HsAftr9mhvhyXhHRVe6WVnpIjyW5khz5exAqijNTYSG3uVEmRmniKypBqpmSaewD9cf2b%2B%2FkaI0%2FQBtj91x1oQjDshf3BBjqkAZio69SScAxTIYEk%2B0s1TrwC7aKQVKsobvlHm6mffw8Abhe54g%2FQZknW3bkuCvJv850gIr4CAnjME%2Bo4GEyHC8ahRNbCrbCC06H3vbbr5QEm%2BmAHVFUERBOd2LREle4DKJdoi2UXWekhpw%2FEK%2BtCU5FS3o2xni7Zu%2BA%2F5AiE%2F7bEBQPkhdemK5L2FA%2FZA4Jhw5oUrOH9rimHvPA0W21EXoDwZcMD&X-Amz-Signature=2c51f7f9d8483c07ffa9f79118137dd480adeab943b62d02f6022bfb673ed7aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
