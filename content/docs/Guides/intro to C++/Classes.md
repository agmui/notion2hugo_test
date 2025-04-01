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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIS7LNZM%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDxrvD%2F%2FQ%2BDRgPCNSpTXbuMujXCYu3fxhvZzqPQE2RWhAIhAMkfHEIIdUpAVARAy1GW7CQbJASaOy9oKqAHh1kA1B%2BwKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyczj7O2JNTf7k3lC4q3AOpVPvoz53H4YSgLnCbcWo2nvVsQnS6amtGglEIkM0l9J5Ul8TIAeSUBW9izWkn1QtMcKW7iaFO5idLfnpsu6npBHUCCKpl4f%2F8iDLSUrzn3qJkb7pl%2Bjw4xcHZiMCaPX5M%2BtdSjw5QheOIQNjbJhoMmu9OF%2FxdIRL9%2FC1Q1d8nXPzW69okE%2B5ZdczzAr0ETa4V%2FmVrKOXGUOQMN56V011RUbukSUeDaXfvX8wvwNokOyo%2FmuWcQVRHY%2FyCKXoL1B6HjXrEQh%2B3xE9YX5DDdDZIDQ5TY4QnKrMlmYY%2F%2BtIyuyccTPo7ljAdlHOlAcwrOHnQssusa%2FQ4%2FPACFyHGFVNG8WlCwfOkeqi4mklY1t%2BOLfaeW77i%2Fp2pxsQv50mlUApGEXM%2BRJct5iG8M%2BRZAE5nAgs2w27hbXszKzKlUBvR9s4Z0NKFrNYmcWg1JM4sImBCZJThEc51T%2FBf6vuSe9%2BUYWl9bicF0okZw9SS3SWPcUCniALGGCZImr4q1eO0%2Bgr9EkR%2FJ0heoLbPgKHEgg80TgYZtsFkYMNXliHUIdU2NiC2Zs5pSZ3WQH%2BAihwJ1Z7qBIQucsZDaKdsHlamIOF%2BEF3KNOYslNrTrJOvO5P%2BddW6OKtv3Iu3K2EKGDDxy66%2FBjqkAUCwxiJWc75B8G1I52WdgnUC3t7Dktin0gkj2TO67B9X2qjoZsB0nRqxje%2BsfvoYImMldXxNG2Po4Ra%2BVYgxYvpEAndeqrjWDkhbhdYIBUIWQwD7rBeMx1y2SeDBj%2Fb%2F6tq7gBX45VrZQ4L4yBEojCGXsHljB29kpc7lYNXBAvs5h3LT9Sfr0uqInFrNS0lNJT57Z0lK%2BfcZA%2B1fY0gGegA3lcDe&X-Amz-Signature=5ddb47efccd0ccf495807ac41f3fa8067b008041550b547e97c90ac100d2f2b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
