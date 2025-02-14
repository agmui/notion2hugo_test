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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL3F3J2F%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCYtPDpY4IbKE9c%2FokrOC5QvALnK8t3LDm1HSMP1ZnQogIgKjW6Kj5LlV19sVvdq093qFguFt95Ns6gzIuol48IISMq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDLrx77%2FxFrVm%2BNQHvCrcA4fpV%2BoxAiCB4JZ%2F0WN%2B7MAYjRx5QqxkNQq9PpA9YZ8utMLij9gJeJSfySS2NT2TEl0JupETlWR6CdQoPD%2FaY9zIjMJYUwcHrHorpYrGgcO7EWnA5wF8y%2BB3uplLwhvP5%2BHEm9gzUtHxGWE31q8GhwZ0NXxwaKbUoPnlJup3CfdtX0KVuybMbokkFf8F7acoqgS5qVa8sqhVaCUZW7ry%2FikqdWnkpavsCFzpNIUdfgNDb%2BUOy%2BPV5sCqXh29XLbJcDBR39JIB9sKOQjLzejn2IJe61BGUvDEtJ9GJQDsImXtoNDsv78bvm%2BazrFX%2F8AMe%2B8oafAQSE8A%2FdWrKkxsuu8IP7sszRAeh18MF%2FezQ%2BiaJduRVNR1zz%2Fv7PMGMi%2F4bfwbAEv9cnLF6%2FAm6yJ4h8dBU6OouVIfQAqw5XUrDnWpRadwVFVqoesqkWzkT90P%2BrtabGiZMXomTrwX9XwM6nPdwR0j3FYz27ilSTWqrL6eaHJbNUhp5z9NFb5CgHj8kRyUvvEmMpJRUGUqOO1iQyx2Ny3bWX%2Fxa4BXXvLyGXGXWQRgI4%2FeUA6F4hDFMtsIat35grgiBYJEcx9I1o1NGx2U50HVBA7QPswQJLekMwe7T%2F9nSoAmY5oDTyV5MKu2vr0GOqUBSP%2BA1DIlb9i9AU4DvFKwQiRp4%2BksuWg%2FwXH4KI1ezzjgJ1uozoMxj%2Bn7V%2FFxwI1r3HPX6FAb0w71VwbRuHy2Y%2FD4Iv05YOjzPMGS5PNh7L3A1yyGVFVjW8tgZgF5OIO5wH%2BR9qBWWgt%2BTMRrL3Kg6EYQeij3B%2Fd7wlecQuX%2BIK9M9OhRIiqKxKlkW%2FveUF%2BYBkQYJvKo3G%2BCgAujCJKM6LnaPn06&X-Amz-Signature=bd0dc40211c253e481cf493f6105944fce4300867c7c377e37f0de9ece5cf994&X-Amz-SignedHeaders=host&x-id=GetObject)

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
