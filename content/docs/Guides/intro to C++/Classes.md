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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPQHC6DS%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FgoYRyILJiZ9NGnsAyHsEcUpkZ9JlnPH%2BPfVbGkA69AiEA8pxsrTeacMqfQkJFgD5GjOyhZfO4Y4S8Z4YxsWpVotwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKWP6QCDtvdPx2cCCrcA%2Bof4EbYTgf1yWiokUYEnr5u6DnrFzx%2FqNEfQe%2F6uDlE4i%2FTHUuGBPSfh9AMt33nBHVIuSYdBaR9sXF1dg90fAmhdxJbe%2FvBGhtcfE86HMR9Q5e%2BMyU88bJ1%2F5tta6k1awi8XnQwn1YNkELslsvewVEwyK5JCCkpysMcDrVdLgqnLb12A4hBQUSAV8n3%2BAyX6k%2BkYP5ZVueSHSb65uC3jFupb13uBCUaxtWIu4L5xdmIbPwdLOhIpCvKH%2BveYBBA64ziSSonTKyqfjArjgsLOuX%2B5FDJx7HQxL87AMwKiBVJTMXt5izYS%2B8ASFFGLjkO118K4AFQ2hxhjgEZYU1HnjSgNTO0ELH2nI4fxCj%2B2gZ1dt3zi8Zrlnzgmd1W9ZfXdl0uyqlW3Jj61cHot9f2SKgku6BKn%2B5J2kMIPaXBzrVoVvbWMsi6sas6k2WCWNJoSAjHxIEoByv7Jt3J7aktjLeqTNf7Xe2d3XqLIZNZPpQM1YTt5S35oP%2Fjt2pJdHpglLp96Bfl19BxR%2B9x8RtmEBxGQWSoTm%2BPqVwEqiV4eHOOduFetP3pCJ2uGyOs3qsvPA954o0EphtvaGagM7RXBC3QuynJP0x%2F6P8Vzh3OpeqRgJ3XrBfyrPIKSNL5MJuem8IGOqUBeYZzRHAKSpdPpBvFVwtYwGMmCtQVYh2MnLyT0PM57SYrj8CQD%2FfqjhXxc3TpOVduRigisxRNZoQk8m5MB8fVJ%2F6nZ5t3mreI3OGUIf1E0Xw0o5HsKyWXYzt6nxavULWn4ELQnFqXtjlf4w%2BL05yTSX%2BsMWEkoJYSJzB9ftX0QtzKU%2F%2FpZYLFbj3IHnXDY%2FDtS31CK2U9GaT%2B6CyLmKdjVk4QjrHI&X-Amz-Signature=a9d216c1fda55274b85ff6d43004d617f446b56bfd7fb63a9a666c4cf73fad30&X-Amz-SignedHeaders=host&x-id=GetObject)

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
