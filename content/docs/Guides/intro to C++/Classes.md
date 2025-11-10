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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAFPG722%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIFNWggd8%2FcagcdG%2FRPTA%2BoGmDM4J81RJbY4InXR4ze7OAiEAwIytGCRgKWyE0v7j%2F90rTnknEqglXxXXKZIHbUJad3oqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkC4q%2B22tH1QY5PESrcA2v0Aqez8j3FRqutwTXL1yCxphhdlrE4jpv0dFH%2FQtj9VGNZTJU0ynVtRHYssU9zqpKSeodDhcwld7tm9I5kARsEe4pFE50NuxNg9tz3Bu7Ao5KUiyarYym80xC1ka%2BjevVILGQ6ulv4iENOk0TKaiQeBWRmExr%2BFcFvGMDGgq4GLoXyPS%2BtVZps6rUD2KQ3wgGxcnp%2FLx61CkdxqxZnXLGiP%2Br%2Fa7kDOFKScuUvGBk%2FplnW%2FsItuVCjAfE5h8FGEhq2uUAoep%2B5Cr6F2RMJK%2BHLbXkM3uBDmhWLDpo1PJ%2FnNcAu%2B52qOp7R0g%2FMZFRnqWFMNfmvwz3LOLnSGdhM4wGtbmx%2FMxmT91mDcuYhMx9Yq9kX%2BKEeqHXsFjSDRM5Kqdsal0i9GmH57iG8h8WMlUt3zRtaFKzTPpciSMKubhNqZkBAOXAMwI2Gr4FDPXquvhEotfQgZ83OymgHoGbSyW1WM3zqRv9YZgUjLqUG9XefI%2FOgpqJ0oVffuDD4vyIm51FtIMiECiq14q2z4AUncB5HQ6NDGS9oErSlhp7Zaz3NKzC53p6K7vDMhQiuqTGPTI%2F%2BXNlfwP31in3HB4DQs74%2F2O1Z1PVkiUs8zD2UnJQylK61fypcr7UmtQRUMJW6xMgGOqUBl%2FrDN0VNkTT%2B1N6kTuqB4paChSbn5XwIihumwlHE7KKBeBvB75lr7gkuCeYWF%2FqFyPEI6pYG4zVsMg%2F7pHDFd%2Btnr9eLaZS%2BUJWVeuvYJiacQ1wrxXA%2Bs5zZPU5mqPbQ6Ao8r1Vrx6L2sDE5u7%2F8bKnvmWICqU750KGPFV3Xq4Yne9C056EBvjfpugR7GrWKc8BUuMzrCWNeXEEIZXD0yLldKtDq&X-Amz-Signature=b3ee2bfb5a9e2d881b7dfdea879c97f1966d69d7832108a7071ada1a36bb96d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
