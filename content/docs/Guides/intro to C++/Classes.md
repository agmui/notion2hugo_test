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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6YPSYC%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDptFi8mXN8eTGlOUZbbveA55m1rcmxVdyJgR8EpC%2B%2FSQIhALEmUEJsXRBxOY%2B3%2BJbSo17M5w5lS%2BZfZUH8TVErPwxnKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTgkHMOlgTeIq0ockq3APRBiM71SCm%2BNk6dQtYSRjQtjptjcPvAUCMDhwpw6yjglMjlQZb52jPoM9SbfqZ1HQJCF00HZYruj19U0c3gbH6t8Gc%2BkpQrPSHwfwCuNOuF%2FJtLhyx7ryMx6GdzOhIJr2dWrqJJx1NOMKEtf7n7fTh3WOvWboaWiNW3UACpaU%2Fd9JThlSc3SYCbzdoOFql3VBm1Y%2B8dvpguA%2FDecBuU4thk%2Bpdo4TnIeYtgUIvfD4fErdHwbfr68qJP%2Fuc1cW%2B3C99suBw6dkeIOkOtfjn57er0YkEyF5oqjVuqGdKIjAnT52kSGozlMZpU5wV84gXLJuWwpwiGKvkdltk6CA2wSr0l7un7oYTa1SYChjeHea4PI9uCHEkrvy0%2BFRdBd9eLqnMFjLGYyhcHiGEN78KPxNaaqXlnk83j7e0oIhIJfhqAUAtGwmBmMnMcKo7JZFmKnI%2BN9KjR1OD%2FEMJuDpX5rkxLd0V1J69%2Ffx503BVnCAlbapo%2FsZJgBOk6Ve3RiRj%2BqU3fwD%2Bc3JmTccD%2FWJgYhPs2pkoFZj3%2FLFMxL4s06rF%2Fa%2FOnFs0lDvxjPnyydprHLYItqnlewQ4De01MzLxHkNjELvOQNwa8%2BeALVZpcWEbFbzhyChfyZa7pcinHDD3wLrTBjqkAeqBc5VvzAC27%2Fu0uAykwwEkP7Wu7z6xvd4xZFI8pqRaJ2yvTbydIoiGcf%2BaQjipkptk2YclPbeOF1W8KPk8aWIxCxjZMSdSOe%2BOXyMistHFtzj1khG%2BuQkOWVusX2WKDPeLLMkZiddNYUjakFB8njfoCwOctr4%2BwxCILt5zl%2BUsgipni7mX76t4MgElL8%2BsNU9dCAcrhQFORwHgg0FeUjXWnJlX&X-Amz-Signature=5cb99466848a2d077efaf6591776d7d906d4d13bebf90e861d1d7eabdb0a6339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
