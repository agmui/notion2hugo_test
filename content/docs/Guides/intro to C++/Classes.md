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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTH3JMK6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCDEh0KrlLz7917b6QMJrSw4LG7R18LqQcZ8tVIv2UDgQIhALvfSzO2sE81vCNKYCxSNnORpA6oru8bGyOs%2BlmF3PH%2BKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO5fj5%2F4wd%2BItZsrMq3AOMdOxW1s%2BF6MyxnwxsYfq1veXy1OhMN6siza0FnQfUl2q%2FGkkiJHOZ8gkHzronDILuz2wGdv%2Bs6hLTYjLsQRQXkC3YFPnjQTBOVbN6cGyjxNDLOi0D0N12t5KXqv0DWhlWt3B3ds6e%2BQXT8rlwyl3FZtkCqCk4ETEw8EolGD1ooF0xyy4OMUww%2BOaDAHbq4opC4GgCuirUSGaxOPP9X%2FQuFj9dzz2d2b%2F6aDauMUHgkrYZCtZ%2Bh8e0yQJSh%2BuFnD16PdVhlqijaJPAk4iyHKz27HkVtih0%2FBkDLQDFpcw64exwQvOZa6oLK9iy3s%2BYY%2Fwu4MuT98Xc8AADfm2nRroGwzWJsBSJKDj1WfDyRBmPvJtbFIj%2Bffu%2BJ0yUyWFhXcAEu6Van9BCbViaLiOGeols5mIXuSISO78NF%2FV9w7p%2BECIVpHEkbWrop6roOY6WHYKVjxq7XJ%2FoEYrzFuJz32zEWDFm1LJGleTYPF1vlzZaHyuVnC6%2BuJ6teY2Pk3TJJxZrkDPaJ7K675OxJ6%2FmjD4zOlh7QxN3FexuR5uCBXfup7hnJc%2B%2F%2FUONE62vCbGMsDqjqqOTpfYy3zUCDUZhnAhFRLqVl0facpw8iit25fKpO2lAtYPBaF2EEXUiZTDl3onBBjqkAXvfhYzruxD4z%2FRwC8bT%2BqhHe0%2BKdh%2FSMfKFSHKGX9xyR5Nl2oF6Qs%2Bd6bIZJLTbnbK%2Fa8HRVRSJUPUBBebdyC%2FNvQf0jp0DIu6YzHyEt6m6HOzGhwHKSb%2BOCTucq7eogP7BUTy4L%2BSSAabmQ%2BwLh1tzAm%2FCttmgFg6Nqg1dH5ykd7FRAtYE1Ht6mE1qgCClIe02Mgj8nxf6U%2B%2BW%2B1ddT3PI6%2B6A&X-Amz-Signature=79cc05095f3fcd470d978db07aa3f2d2ced7ec37833db5c00f935f986c1ead58&X-Amz-SignedHeaders=host&x-id=GetObject)

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
