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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TXPK5E%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHG6dH9W%2F1w3Vtn4ScBFZ4zMpS1ACIxdtKq9b3x%2BFVWAIgG9LJbWXkT2Hg0yHhuNIWZe%2B950DfR%2BYKHBTGWNa1w98qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiWit9MLuvaOh%2FnqyrcA9H8q8IgrLfdbKCCevCvyqsFb%2BNxMYKHszhbZGT1OBU5WFA8mJZgQxYmmtHgwIAX0lP%2Bu4T6n2R2lwVk8FP0x1z0lZvX2XEcwV6qWnQU%2FTd%2BSRWCpySJCLlVpCNZ1W5ZI9ctyHJJMi9xmcCM0sV7wkUFCopSSv0Qhm2M5X0zGsiF6wyAkjTeqP0D5EqPitsOF5%2FP6h1m55yq2aQ%2Fy7W%2B08yOBJA3NLS73QRu3ZeWoyseFbGvf4C6cyWsWdUwxxdIYGLuNqPV2yj4edL%2Bh%2BSJ9rQVcn7HdEzpTA8yzI4wy6wPMRmuzI4KjpOxYZO3hGXzWA%2B0fF1QRIDw5q6lrm5Q3qtWL41W0jP1WizdW0pEcDy6wY%2Fs8XiIj13BmdENZJuu1IAZtGeOD6Vh7na2gkaNwgNW3ENLajG2JNuBweH0yTjh0nnDsIQ1au03XWVWldyik%2FPyNXBEPJbLbu4i%2F1k8rjP3TpiKgRzv%2FwKaMBtjf9031pj%2FEmLJc6CzqJ1UY%2BsmbsfpLolLjBwAwynSk5F%2BxrRhINEEjVyTBWEAwc5SylTevueV1U%2FrdnhBk7ga5W4lEmwiazkSr8Hqc9pgU%2BeEvuA5vsomgKL6KDETf%2FAF7IR6Jd9%2FoG3S%2BNxqi9UPMIiy1sIGOqUB9WKU8IGdwFJXrmpehmOKa5JLKhui4HKhGb16WsYtA2lmuTtt1vHrT1lPPMKTcBBI6bR4l67Tb88UaHAtpQFRoGUb2nNyAS6MMssRbiXoEkTNAdTVmtwJ6NbppuPU46OxFI3EAF58Yw5dmbKgCQ0Uo12Avh9X70PuJd47AIZ0%2FM4P25avILJxElN3kVFvlM%2Fws%2FvMEPZwub%2BrdcYVesY%2BDb18KGIL&X-Amz-Signature=f2f60f547850c023877c94010797baaf2574873cef66567485f6db5a702c7fbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
