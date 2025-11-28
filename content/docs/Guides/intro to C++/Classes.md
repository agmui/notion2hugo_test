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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4BZY5W%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEx%2B8wf%2BAlzgQ%2BshdHWMLiaBbe67xpyItMQd69aqeFZCAiEAj4elqAodm4DHxPgNUYZvdS3e9Iweu6RNh4LmF4pFkv4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHY2PYgXpcV7DJ8kpircA0p7StDYcJ625mI46MUevywz5%2FhQ4MkJpTPUf1X0OMSP%2B%2BetEs4ZlXa5wVCZnr8PDdPRJ%2BrBhlC9AWRba4apZTbwz6CrvUNJ4fzo1XCcv42KGWIE9Syuz8jvVbSVAVOmBjSHcBeNKMCNJ2Iopo1qhjUXvEIiLWFxxdEreJgocn6krnwWcPnA%2Bk68LMKCh3HZ%2Bv8CsbuyqPj2FnF4qucqzPqcywwKS%2B90Q39Q%2FrbOXGrc%2Fg8F70Revr0dUvkFC%2BeY%2B5zway6w%2FWvboUHrPTpsTscVi8ipFU1n2Kyh%2ByfUtz%2B2ULaOdJqklh51YDbT3O2pnXf%2FbINgz9ZwDWZOSNSMSqAHLkwHzpWLSxvpz1ehFMEe6YkLCUXwftqTSO3QZCkQ8QJk8D4FcseWe7Fnqk5UzuY8hGE1YXqD%2BiS1bfa2g59csTXo4ZDRNzNAZ%2FzAn2ybGPQYm9oZYHiBOWgoBawYOW6XsrRyrC%2FrvtUcic7Z7O3uP6hNN%2Buw3VcD2XSmxbqtBj74WTf%2BEfB4Fha%2F5LcRULuznmH9f9%2FCl0xUNF303ez2jHlgDHxRR4%2FlOvWQrSghSqNltTNK%2FZBwevBgE3vGP8gLJTyS%2F3osl%2B7Wcb9F1IzuBggiKjCMg%2FK5bdv1MKGGo8kGOqUBUdBkgLto32gVZ9wOF11h2YO2eHXIItgWfALTZCNbnexHMnPV4ITvCgk4jcc7rQk7gAM%2BF7BDeZ%2BTcOs9KI0qwl%2BCZXeEAce4egnQxqHib8BeQcb2LbDe1ievX21ItbIBeBJeQ8d0aII%2Bmkeq2Ae7SnjMuog%2Be3xMzXHiXbw%2FqW%2FUyGt1nM76O%2F9olL%2F2hfdaJU16jvJQYorTbkrLlLfaLvCSJTQS&X-Amz-Signature=9510aac569d14dc3d22f44eed7f8b7ed62450e5aadfb904b17eaeaa6a84cfb2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
