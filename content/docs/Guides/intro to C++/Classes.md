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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6AOZ22%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDWJ0fsRKgYvsQIqaySPs0%2F6opUE15Vc12QQzROOz%2FMTAIhAK%2F2Lte7PBCkEPU3OEEPFKzqT7iSlg9ImGeRW9%2FBNFwQKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysT1xwSFQCn5YniBsq3APT4zkOa%2Bt%2FPlEsFiALKpjgAC8cOVEO54S%2BNLyIvSKeZgI6MbgndzWQBP%2FcV6kap2uKRdrxNCOdlv7w0jP8cSCQTJ8Ozyp50Pt%2Bs3wwTk2ugquCpSk%2FQbwLKzTjIWhGAsIFVm8Hj9tHxVryJx5Y8qtjMG9qSCv7kvciyGVGWn5Y1KazXyIsZ6aRD6Eg6QbsN%2BHnNpr72k2UqBYYiVn3Ak1d5LUFh7UrKwwr7DATPqDugX4JaGgkzWgSDym2ihhUvP2DVPPIr1DdxIbL26u4bhltbrh59ARTN4fdCFyoAr9yUqmcQ%2F4BTKl7WFhmwI7FuusN8Bv5cRUbqBOaf5CBT3lr0%2F%2BDOjQeaFj4XThojfs7ZvHKnmLFtkA5XtWMedwMfJS8IVQwRG9OyME6MrTPIL7LWvtg99VKcUCpDSM2VL0Up427vFdvkAYcBX9ejexEFDohduxqK3CZXR7Bea%2BPbWyZYn6T1Odi7MjewRCmAOPPxweAQqVqN1WbwoVU8Z8%2BZvMWSxcYQWNiNoVWNhTV6P%2BPwqFfdvJekFyBN%2FHBtr9mnW84%2FEaa6wLRS66xfC3FO9lYk0wUb66Hw3TumCJj%2BQpKOsdPpUbG9gVt5%2BTevHmKId6UiXRuR5HHdP1%2BDjCT6a3NBjqkAWkyGfkKK6way79OPS9HibtyNzAfiNf9qY7D2Zz1OEwYhdinLYOm%2BlaaaTL%2BTIVALnzpUABGqtVcbVUzaq3DxtWXAQ9EToBtUvXb0AvRU4IXpamg1tPUZ%2FnwNfTWVRooiZAgAsAFQrawnLUi9EG3NgGtP9tkJmJpgwcvF1MmnqdZQmmEdflHOeAylJNJN4ZKEfInOkeketq%2FnOWTs2Bk3yBZYCnd&X-Amz-Signature=092569d0ee44bbb396d8ee27a4f6212e31b658d7b8988b9110d924998d9829b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
