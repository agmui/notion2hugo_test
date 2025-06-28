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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF6SE3WU%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwAIA2f1MEqkIsrcRBY4A8cIEIVLIPEcY9HZcmRk0uJwIhANL3ZRXkJn2e%2Bki7wfOqWdLfZckkCuBpwsf1oxDknPXXKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkfmqV9TKSWMsfzW4q3AMCSa%2FSJvazNSRQonqVfNQ7945myzwZiRiGvcdQWf9%2F0mp%2Fo205JZiODKhtIjstsjlv%2FSBAmQbNtMxC6s4u6TI1pdKErnveqRIPhX75UDUPtpswYZfFjlejSS6clyhJxlRHeJhXupok44AP%2B%2BC%2FPZ5h44e%2BRkPMn6Tr%2FiP%2BSH55hhFbxn083wYNLF9ttX5uIYoEPtQP7gQ%2B7G9WZanABBdGVOovbAFx0ro3PMYu4b5xyVT0VY6Vsl1oPFSfFafvOxsHjAo4wV67MKQBb18NbPL7WrA5%2BE%2BpVeb%2BAvmEjcBI3GxnqxCYmQnhP9p0B%2F0l8psW0WMACcbdjLzHxx0X0R7jhXjxRw3RKuIMhybhUTMHEPBwtpyhhh%2FMyZeu8GJDXbTzc1W%2BmZb25z40bvYCUpeUyAEGc2NEelZ8AbGsJ4q97hczUbnRqSwoyP3YkOkpOQ88K23uh69V9RvCVy3DbsIwKLAn1snj3ste2YmdIg%2BuiQj%2FQl1%2B7PFB7YxD2OJCulqr4DF19W9zg%2FliuHnh1y8AmDJN8moXTqK1bflZDxXMfmyUQT6F%2Fjl527rn7QXTmTA%2BMUE8v3BI4CD%2BgLwegx1FPvHD%2B2UIJ2x4P5K99u60%2FBLwi1CiU5kA3InIUTCWgP3CBjqkAT2Fhs%2B7oaG53InGrp%2Fni3TMwfibTvHxsyWdZ27nBZp1lYxeqgh%2FBMIvOw1%2BF3XidvV%2BIYPnSjzh18OrlEdiW%2FrQ97TpNIK25hVrSDmkmvo9DmRwUFR3jQNbwVSZlBySvVd37%2BZFQFDBHZwPR4Za1hB7GaTpd9T1MRomgibSfHh2G0qxLjmEOsyGsXBlflPbgCom8OxPXN9m9Mvs3AFHEODSo%2B%2Fl&X-Amz-Signature=f6e4d40274d7acbc70f0979908d2b9c20c9136eeb521b1814e40cc3567f81cb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
