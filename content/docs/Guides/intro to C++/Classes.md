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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSJH5QVU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3%2BSU23e%2FZ6A%2FaTreu8OcmDvCQlsSSHhy5TNBPYmvn0QIgNDMcMQKqlrMRWmQWdR6DSdGoIFBmvO99JDcjy73WBVIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDMjgjnIam9k8mQdBPyrcA6gKHe7QTl4Fil4j15tXezbHR%2BrZDklAhPnjF7lMNMLh%2BZLMccsPSiRppv1yGzDis0X3vbBhKtU1kkdoqbJ4HNxHmmGMvKNijwnV1D0ZrmpWE32XX%2FThLzWykzSg%2FO%2FAHde98Frs7COFavlbbT8OeDM9Vvsvh2DfEkrHSJfpymB9My47oZ%2BpLb%2BaXShydigtnNlTYwI2Y3PMnOHdt0mkeYtPSHDQNBI07mYVENFIfNx86%2Blh3fi9mxzn4EpO0qzg6XmW7DR1U%2F4%2F5o42JkOYn2J9oZcuUWOo%2FF302CBgn02XtSaEHSa3pw%2BlTAgU1DzqTDL5Bh5oVljnNCL9UElIBlk%2BqQEi4nQNnyC9xmO0BCwL7PYtt3vPHoo9x3EHt3wC%2BZgnlJ8BhUl6IXsmpui6QzMZhkeVXmtDvppEpvUUrBxw05slG3QGhOoaMMbkf0DFrwFI88u2tXAznYOpH9zCwAyu08HF6xeXhK7fVnyjKAYdY0cHxe4mn7od%2BxRFS8HFaIhwElkySXUyx91Juvx5ADJQ3R%2BPx1a%2BnVZ1hZo8yspa8ksPKyhZfZH0Xw4Lb1d09MylZuFKXxkle%2FvVAl8BqFoKApXB7sQrikhZyf75X4FN0Hm5Fcnruouvdy3OMPGVksIGOqUB5PIZByzZkjIM4lHtXTG31kq%2BnfvA0eR2%2FG6dXvxvwp3vksKwISm0R4NCWVE%2F0enrIEbxFYqE7VNwVSrTI9Ne9OEqKnv%2BgPy6I82mp5bUsaYpApZAfNlIJ8OhumlYlIDCBF88pfITaD3RVAHf6VrMD1ZNtulOzHydUzWoKHnBqTx5qtPSWZdDQ02dm2%2F4R1RCz%2B9vjOYqehx6JTYxgNTS%2BxAOc9Cd&X-Amz-Signature=ee7f9c88f9052108f70f2536e8351c0608a9921b27fad550f28f706bd419001c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
