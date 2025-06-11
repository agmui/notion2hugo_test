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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNCQQEEU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOoo15nO9ek9i6hGvUWFcEs1ANgt8XK%2BLSnVOhUCh7IAiEArZw1JwGUpyAswaGxC9EjFhDZlQN1Gr1zOu9qLRShgAwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpsaOuen2XQSC233yrcA8bJtypb8chssKlA4PluLxetzYlrsf9r96F0Zef9xjrVYDXkoEFVgFH09EUdgsV0vgAcBA%2BfKEqHkYHQiaXY%2BvhIqGAQ%2BaH5y8EIclnV2Cz5PXczwU7j4m5yWsidnujxboZRfjlhloQTdZ9OHe84%2BsqZW5gMIVaorhEEIq9M5dCR%2BMAk%2BCS%2FjZ2q2wKWzmAKqgjrgqYfRhICmwsztN0JlTXXP8z6I0seoBEQ4E39ZRKKDN7KItUjrJ1yie9MtDj2Fc7MxaPlge5ahe8xZ4V%2Fl2OVJFjJ8DwPz2gJT8kgYzIi8T9bHPViSwlGjBQ1M5YHM9ltdrxQ6Y4LqXWj%2Bm9bc%2BwgK3NqBTpCZOTVyNOZmM%2BL5KWK88Sh58eJDbacnjNebFPPj2blHfGv3rhQZ3d0ybx1DvokZwutnMbJMAynM1Lzkba9dDp8R0uEuqzDUTHt6rnf3aQOWBTNHQHka6AjCZC1LGhVreAZcyFQ9j%2BW8BLDlvC2KmIzQW9kXU%2Bi5Ai6Z4h8u5FNyLl9ch5ROcKR3LY6KRchZLTcQXfDdhPtbM4o%2BrqIuB7DgYU6dwLFccC29rR6JU2rEgXQMWjsPFLWyNkEtnNAeFabucjCVNTK2A6qf7wu8Zq7I5lPoIt8MKqWpMIGOqUBA5%2BbfZP8OoIvHxQhHcN6dSAT3N2a4Q%2FQjc5Qs7LXJDRteQKhNfPxYagVIHOG%2B4KDwQ9DPFfAHDZZIrD%2BdVV76doBOG1LEdEFV8%2BzV4IvEMSoFTi9F5c0nhoxBlJ%2BhYBpNGxu4W2v9pvFDSwWqt8aIa1FaXEju5swDZ%2BUe%2F2dqQ9PX4PYHTLrXruiFLSkek3xwpWRNj3RJ866%2FSfQKDVBzKIcneVd&X-Amz-Signature=820c12ab6f782e7d4367fab06d4e43b0a2b92f9f54f53bae3795624599d22a94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
