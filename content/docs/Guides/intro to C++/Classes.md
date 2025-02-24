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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZKA75CY%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLuqN61Ynydcw1BT2dvXnMkRIqQ0Y1FhgcJAZYtI4byAiB97EicPyWzsUeXqEJDffpB%2FqQkujvYOPJwC%2Bgj%2FJkK%2BSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMBmp8%2B134GAsdZ%2F%2FjKtwD8QEImrunHUb%2B7T6FsuCSbWvYzesmJ%2Brb9PU4SogOKJ9%2FeyK33pwBLgtxqARO6GLVhtmDqgO4fchMNU5EKx9%2BaQXwN8dIl53o%2FgzmIixaNmDOaJRW7pJDAXI2%2BhRL7LkpE1fec85Ow3HkDkGnVYNQP%2BQa%2BfqvkjEZih%2FeIOu%2BzAUPectecgbk%2FKeazkTDHSUCDjUBiglkW6JJPZNwiwK8eN1p4aQBT%2F5EjNBpeasvO%2FdkFsZl60BckdX8jLj1rGAtATQKV2g2rqkm7Owr39TH%2B5i8qiBZmy42aanrNzYtvxdzyVzwK%2BPEY6EKwA6DJMGAbH%2B2ZM4b7oYY7EKpFCjExRcZ%2FozcxkmmWr%2F6BcG4XzxIX1EVvPXx9yy76TVAuRvZNCbhubMu2bdMtcL2xwM4w73wSIiLpWVlcLPAYaS4ZREzirPkIIhN8CCOFts6sZ%2B4PA1B%2BP%2BIf%2F0FSQIecKJDYI1XdBGDZjhnfMVeOvb4QL1EXm3ADVpLC6HEnq73%2FeqiMftT9aPAB1aYCdpgxaA53tQqXmW0Y1jdEABfrykszihgpNY8HjJUp5jcqRymtVQyuaQDyaWlg2iatSAjt%2Fs9urbQswoj64tqISLxcUA%2FufwHG25k06TfxFXXAfMwopTwvQY6pgGnOj1Ne09eqDpYNdokADpmYMbtLUvmN4171VkKWCrXHExl5cKRSE04pM7yHSJAy4SUt7uYQC78Z3AeqgjZa5iRy71DQaldEbjfpbabb08od7C%2FlgJtxC9uvRrmrRyXxUr0yk11HAqHmvlFvOMZsD0QaTj56%2BoesOc4LCu72zW5jSW4PIyYN84UUiEwiOuu6PSVONAkIPBpy9vAej7hiRbvW35f%2FASI&X-Amz-Signature=953faaf4cb901b1c88b378ec4ec8c78bf6b9c6023efe954f727407edb317f34d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
