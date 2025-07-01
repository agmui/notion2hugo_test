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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUH44ATF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAREOUlPfZEdJGyuxIJZgI1%2BEsEIY0Ac6%2BMh%2FivxsfiAiAFQcHv9z58D%2BHYTxft3seC1oyJPNh8PDWWYaxcQPLVfiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUIVLNqjGOTXOqOe9KtwDzg6LU6QSgqxBzaN%2FzXJDANMtD%2FUMXkVM8Ve9CYquce%2FsKsD6bkRTzJ77rsMNENX7J46RZglLjTQmNd9MwCB%2BQUF6fPeUBNdWdtapFcsxuxeWzW%2BKW1y6YLJDOxzNR%2FgKYbNsyX1CUFN5H8DGC%2FndFrj3UKfZuP%2Bk8TOmBGJMu7o0oXjnk2wd3JTjvHd5s4g9Y90JFF0TsIJSg6RSVt%2F8UEhmNiS2VyJgUCw%2BjjhhEPufJvFEC4T1HbJp9w1ClDkH0lDTQPTc0DiTu9F6yiuRpVAxuiaLGgUbCLPGi0VehXpwbha9z4seDTooiFggItPLuSVpNHVCVLqqa7xRkjT49%2Bo%2BJE%2BOccqhefbwxRDRkdeYotRIEC1DfFm9jxIPjvNbFnXdw8GoHsW5MuUWP8%2B%2FoQ7%2BinJM99gKgriMCuAE2hxnalAwA%2B666TqDKs2Vq%2FdzrnOI2O3bZsldzHCqMnA1HzJhITr3fsogLd97fBoah7TI2v5Paark5RYVcBJ9YyJuYPQ4k0Plko%2B%2FBxZTnpRYVFQa%2F9ks0KFxtSbDaMjXy0UuaRcyYVw3QsRmgdgyWMI3uopAohMFJsYu0UnmJWfJ8892aUUWng5s8aAQNz73L0Z%2FMp%2BsXNWbM2HwAEAwiq%2BPwwY6pgFNjORS%2FRhD%2BLHNyXRIVZi6eokB2MdFn0lVDcJWjurS79CJkG3Bl4Xep6NNRJ22CX1A4WmU6vKc%2BbZ0o5YAAE0ViPM3QtI%2BnvhIomy1JCfIU0L8iam0aErOQv5WEMCKJbLPJoEnuNB5lRrVn9s2fDR%2FM3yT1uP1hpVVtbNHXtAOYUPq57DOGhPnIsLFXX1CRSivjyRUSY9677rSKRr7LWMCxWqnlpBi&X-Amz-Signature=96f63f11c8d0915b23567dcec34bd356a1aa37d72f50ebc04bc6c59143b6edcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
