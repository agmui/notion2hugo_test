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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW7THDXA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI8o2yfAoiXrNgBK08RF6D56NvgQ7CFru7gyKi3y9JsgIgGvI59bwaLcTD4dLRo36fH5tqKDVToE71wetw4h3ft2Aq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDN7iBidWtlTZSSprOSrcAyA1P6GRHlLPsuyNIBwzWq0iRPiAA65KpE3Cy25rcWhSwzEUF%2BlMEa1Vun7KzcMRfhTxw1q9zd%2FPwuJwWuPeArwaav8J%2Btaf2crYz4B3zSEW%2BiK1uYgxxFP0eRpbmPHIJ8eUDSjK20MEDjveg8woB3uoOx80BrpELwbVqPy16eV63gha9i9ZSYGqh2A%2B89ShWlTlEFF3qM6NvGMQAWY7yncgNcazYZYG3QxPA2pnoflNKllrbu8DTJujgEkWMRU2%2B5T1QYgjcvQaqs2gMzHObBSHWDH0FpLYtLDSxMGU4DLa36RoqHMuGFhj%2BTWoH0MC683uHZZsVBPpfZv%2FwsvptmXuKLR9IHTeKoDqq6uPwLp6WoyUJgHMxotJxhx4g5WMlFauXnmuKa%2BdNQqrlfmwtNNV9dTmWPnsjHoh7RIfWmUk1iWTNlWcsWxjTGtAbENSZ3DK9d87VCl9%2BhnbDiVt8YTF10wMSM5VwQDWBVVgPUk2oeffEwB%2F%2BRTCM8mPVDMLGWZQwOKytOZ%2B%2Fim8LUDWup%2FBcaK%2FD7bQQ4kNPKOr9klkSApczOFww%2FExV3SisZsV4dpnAOqHLN8GIk8bNB93VfdOgWoTHdQRVcNR1W7JLhmjjhpcKSiiqS%2BaOeO0MLHJ2MEGOqUBT4LCa8O%2Fx2OH9Kz8VaVscww9i5ROCgxjURf4WiVeNkNbZR9O%2BU3qg6Bv8uyqsNTTZzRdhucCT%2B6ABKbAZMLGXvGdfbrEh%2B%2BB1dpgrBWAjuzg8GLwdBtyHjbUPbznCiC6DQ0SvwdfuRAkNUIXFbR3XApL6LYPHX26aMmgOfzPQkoq%2FzHgFc5eoVyf%2BLNHbRmJq3973RjXvNdLbh3%2FDYE8u6AXU%2B%2Fl&X-Amz-Signature=36f16000423e2c943afb2a6f5bc92071d0ecfd1bc3f52b9bb8c30470d8d7abf1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
