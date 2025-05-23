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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJWLMRD7%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIBJmQqA6ykFdk1nswag61Roo14TobKu85vct%2BTD63Sz6AiEAjlpF%2Bh5rP52bN7KJO4tjeZyfk87mVa4Im1q4KwreB58qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEinpDZ8BrbjHTpHHyrcA%2Fo1deNlYQg5X9Li%2BtdV1abNqfXAR2%2FbJcorjW9H4GNagnP%2BQ%2BDI%2FQicnz82Sdu%2F89EOPqtR9HaKMrZVgMjSg%2F4dXx3LmbXKNQp745j638wsnrmgJkB01rr2XF6nIKuqwSy83WIleKHMhaoYKAgY9n7K6QpqdWSmFUfLfP%2BOaoZg%2Bq93%2FCQksbXt2H0GUei9GEkepJaxm33Db3aEBLEoq1Fj6Uycq6dcbDzHBacdXLOKOuYvwIBItUXWru3sE1ehApwEwnKoFVVPnjkm7ww1vPdFiX0CcSHj6CPE0KX9JvQVa92qcsqiU4%2BKzzB5sP0UquoOhxdU6tz25k0R95Ew6szM%2BXhkOe5SxELMlQcjllQJseggxnoYTH5Z60hoo0ifzpWkkYqHKQ2NDMlH7sJWu3EBI7%2FUCzKQ27%2BqdweNCMIEKAwXgOLBJctlxyijQsaLTNBwYB6J5E4MLU%2BHao9vrCjZ7dLWlF%2Ft1xHrciuMYXxfb%2FoyPoX30lBjvPeWTO4EBwkReTuq7FJW8IRZRMpfaayZLdfd%2FOlKhU4Ee3Zt7hkgthOt8cmyo8pDkwObSxmKST2elOa7VttBVSu6DvOUJmoo4kDvmav09mRYQIduP47ai%2BA3w7KJFCq9kgF1MIqNwcEGOqUBa4ED1AlxwfXsgvoW0Y6RqyvNJqSR7zhljkptHqCKu2glLKxHirHOgjUhemJ0M4oXjwcAZ2xjHdbdrowg1A2WOEq16oBUQbF62Dwz90%2Fl9%2BWo0YO3NBV1DKpB2hAN8QPVm6tehtOFIFYHkG3xsQsi6kfgBT6TnTKVWzs84Nc7ewJYlrWHmJTBl1CHN48VhcBCMi7HjFABVIqXCQKCS5muj2ilcE53&X-Amz-Signature=7c9b88d72ec7775b7bdc0ce9e3a41af32b021bac971adf850625a3d09365d3df&X-Amz-SignedHeaders=host&x-id=GetObject)

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
