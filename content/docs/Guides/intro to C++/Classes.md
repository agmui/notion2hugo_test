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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHQSAOYN%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIFFu3RC6MDe0oAfUVzc9oMA1SGNDP7ETCZk7cb9JHG4oAiAT7vzMPMUGscZ2su3XRdRfBJ7MN1k4%2FqQyK2hZWS7esyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ1ndQeWGhB62s9TcKtwDiyOEX3VSPc7zP820gPcECW2qF22ajF52bcnWyXmUPk3YvARmUQJW34EiHffKkpURd0se854FZAL80LUQQkrCiXipC3P8CLdr4xhVItJnGgRtVmZXFWPyH35qN8ouJv%2BAAgTk1mCpRI7JZciLCvn3%2BvhzcGah4BXVxmV7BaOLVe7LDEnJkkoj6no4FrvcGxpIEJFyUIa35Y%2FHssSCb75E2ejTFAzGhswojUxeRi2WeoopY62Q%2F8KxWg8WiLxZg2Jxg2N0nULDlmIn8mY%2BOZFFFWvuak0EyEw7cqyx5TR54Glwekl3cCgcwqKh5psNMnkxhdRCBrxDvcbmJzSdZEfFTI3LHtwARzMfTgSJA6fvupyDJTEYVwr9YVuOS6ZGJIuMHflKDWG0z4Aw7e%2FnraqwnwgEA2EyAlY%2B5UQsbqwI7wriNS8UVkdt7YHFSGZDuRZ03oiv%2FnbfaX7Y90B6CqBDN4sC9BNZe%2BIgfCXBa3bFhe05R4hVbtYi2nBdPTfiUF2lj9f%2BvQfPhbeS7sG6aIyJehP6OafW3njXvgo9FggTc5ZApEG6HuDv%2BtzGT%2Fs9hzmTMNOiT8%2F%2BL2rtgWzgMEb3JBBK%2BhOhVjYo1HkyJet6y3LLsIA7Q3MkVDgU1nwwnb3cygY6pgHKfbLfmgBThYCepmTm5SF0eJP3HeWY9X64P8h7yGNxCmKMgz2kXcDCPrrlSVbRM0Vo%2BS1%2BAnX6xsNVT4KDs1aHMDzaJs8KzBcgeYH7TLOZ3qddESJDDapS6v2SjbX1MU1r9%2FjWRSZbsZ90h11YD%2Ffmpq4L3%2By8iXUhTyCsPVR2dqXcNf9OBb6NV4wHDF9mwgMnYK7mCzH%2FkoAXwC0smA0773FTvM%2Fa&X-Amz-Signature=d77789e71cf2ed783164cee104ec404c4888024ef6322a847a7b5c5c518358bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
