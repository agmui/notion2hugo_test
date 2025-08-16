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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZYTL5Y%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCzGP1HinLxN13Jxsx7ZCUPEUhwZt4HSdmO%2BiGK3c722AIhAMhdtxCe8kzX6ER8VmyGUYjofSb%2FMVgATX%2F%2BQL4XtT0YKv8DCHcQABoMNjM3NDIzMTgzODA1IgzWMpziXdQTIB5pt20q3APVv4FDeDbquys4to6pdIhioi7%2BQNGLTFhB8w8J7eWex2iWpk6dpVQurNcn36kwCCmh7z6STGmfNitkCSBeUsaIWAlVzjz4YndXeYv3F3avhTWLyJpyX2PXEyMG%2FqDIajXt2nYnnSSpwypipyI%2Btfby%2BWPbrc6UwsXT%2B9N8E3Dq5V5NjmzIWifynk%2FsDeTHyTxzUi8zs8Q3dKzaOTGSx%2FhX%2FxHJhM2lqHPs43ZJsCDOzwM8YAPwCWiY5QAaHjM7qxgqc1RzGyFOb6ZnnPhZOJfWHZVqBzYqEKpC5GR%2Fk42t6Cw7%2BKYISnUtYFyqOwaOaBdsNKvSUF9bKG45jfa4Q8AjeBPzhrdPVIiJLR1R9Op1UXMNvr5pjDGhY8IcU0UFKcctUqh6cWqnLTfpHHu%2F%2FMUJmqG6RRcHxcKItg%2BDku%2BW7JQ1De7DsPAyIX4Ls3yf0TINJDp%2BySPqb81mEVzNtP6HRa2Crxd8AqchLt5mCPUNUxalgNW3NXFdruAKn5eGUuN0uNhFnR6OLr%2BbruNRZHwLn6vEy9Xvh6lxYKMIwOv30tAAKSvDKVh5xTy2ngR7UEcFt8KDtwR2f99xLAI8hHEvX0ZmzZjnH7NQgdwuiP%2BA01%2F2OqkUjcivOrkX3zDxmYLFBjqkAX98XiEtkZTwZkt7zzKy%2BwqDWljMrr%2FwuEbXlqI%2F16mH9vOdqvYj6ul80idVbVqvNENGxfPtkSR5lEs2wefbONoab28oe%2F9m545qK0JO9FxSvUdN8OT9yXAAddMHADxRZ6JBe7nirGvM0Hwe9lL7C4vdK0b9G7FnrohXh0Hh%2BRSEDrdwFuUT3Dlb0V4%2FO%2BW0J219yZTKawoJirPYPVBFkD9qbeuT&X-Amz-Signature=2382d5e0a3c7fee7a74d985c6df080e35d845e5fa241e33efde7317e6b25369f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
