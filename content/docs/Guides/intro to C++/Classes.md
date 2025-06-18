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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXZXM46M%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGG%2Fr1NbRoyJ9FnXlRiisMJh%2Fpww6Y5XN%2BuSty4SLSEsAiEAvtAoHVyesZaMyv%2FDQY7oOY7K0CPaMN8m6igMndqFHNoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO007%2F5Lv3uDLX6mCyrcA2poBV3D1ZNfP%2BZiz8V2QC8K6WlT1MJQNvJzVBin6vdrwHfLH4AqmaVzeN8KhWp8hMHCPtdm3Kg7Ywd22uyk%2FOiCioYlrgUgqaRi5ovXjflvXmHFN3wFoa8w%2FLjDFB2JmurL%2Fl6Mqzr%2FyY0MvxZQ4irShJReNcGzSbfMzGL%2B1iMl7tswvt9vY5ZOo3RItu4YBhStNhjUfbZrzv936UPaqY22nQnUvRFWhTEbva56XjsuPVaYu48OK7m4%2BgZnCpU8tVm7Mw2vStA%2FBp%2BIZZfLac2mDdB5Qno5%2BiXUbFkbIAOUjIf7nKQcXvVg6S00zjvOr8acn6KwWZKM3bKfHLcE%2Bn5%2Bd3CVa2LNwqmj03xJBL4JZmJc07vKnQdqZiVtVxFlwHGBq4Mya0tCovMfgydqtsmpzwJej2eN4FDmGeeX2xKvzzkfWwIglTTBSInU9WIvy0IK7FR4DzuZLBHiHO1jfPFaSreVa77Nywu2pR1XK4FJOuPl5A%2Bjwf83CeFKvqtcVS4au92Lvr4Ns%2Fv3KdJ%2FoH01UZRRgoCM8lGJ1kXaqdvwHtlH0mPdl1ZtlmZxf%2B4k8jX8Tntl5X0U3IHkm5%2BVEyHJpUK3AuIhV68HJV7z%2BIdD3ZqAw94N0vNmoQcsMNugyMIGOqUBSz655LChKCbDpz3OOVK4gad7JlR%2BLvyqdp0zclWjYUAGWqLyfyf1HlOvWTW2Oet03vCDHufzSiS3HsEw7hdK5pCjmPLzZcfNVO1%2BWZAnRk2RA6ekVK5s2RPuO269OOaAE0jqGT42QfAehxML7oe0VjrmxWu45Biv8embQzvmtoJu3hvLILN0Q7cvLMZzXwwNooeXHgPUNC1UXEVa9r%2Bjs0da4HX5&X-Amz-Signature=a6287f85e2f1e42f80983c049ebd462d5c69d8be3bbfb7e338c9e22a86b68bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
