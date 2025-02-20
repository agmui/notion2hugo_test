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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK4ZUDTO%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBe7C0GgFCABung2tx1h%2FQ7KeQTxpFkn18CrRaFC0676AiEA2LzbcL54vkv0VwBOqLzduQ9hBOOwy50wgoBG3WOyd3QqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3vTvd2k%2FsOBTbD6SrcA8G8FvNBAIl6oa4oL%2FOV0BAOcF0guoqF%2BRkwb0NuuCrBSkaHn9Y7WNK7kf39g%2FUN69A3QMprRLKTuauwSpnPSpomQSCQCrnPiXp70dL7naFkeBYnkAY7702d%2FrdfNXyu9fN%2B4WbosWVXiQE%2B3eyfx9xTyGXJ3wq1ZpFTa%2FDOZaa1yxtAEx2IPTI7ER5cGIJUQbyd8sr12pfUP88JSyv%2BRDHn3MWCDiCP3mB1fVZu9BQwgW1RCeSFvNeOW7O0Pb61%2BdJgaNbf7sK2DDLsA7IZCvzZpqtduy0s5LD8QBiJcq0RSTmJ%2FLTK9gpHetS%2BlQsQg2t6RJrdLWFHlAOFd7CxejnBqhNW9XZvWJmPdb94141FkxZ17gRodY8aFmAH40jPubybR0LTcq1ladzG55kil%2FOIsOGz8MSvNJjAGZsQ4x%2Fek%2FpK%2FFJzHivn%2Ft3AhumFwxVLxkruAIPUL9jEMrAFDkuTYHre5rxVgp3FVxj6yNGvWgk7aP%2Bk9roay4swDWfTEB77sx0QvcGPaJMycTN30uzXkiGWvuhqYxLm%2FfVaQm4fXCUpOwZB7cG0%2B1oAzLfRH0YJ9qNaku9uTADYtIq0Gxb7qoxXoHaIU79MYn%2BfZW3UCt%2BWKFQ1MNC27IPXMLjY270GOqUBDHdxUszFZiqYAo69dbdJpE55sp1gCm4rUQ5yqnn%2FnP0yAwGegXXTC6sfA4ANEedAOQ80hpIbN8HUu3wlLCLuGELfcl5ynszxofX%2B7yl7C5iYA%2FGHOucE0lDWPNuueliNpzdWtE1mKW%2BmL%2B8oCS2zeM3QemU7N2O3wURIa6OnhSGeF7SxcNjT5Q%2B7bPcV%2F94vRevKKWJqZL3nIcnb6AUezYrE31Kc&X-Amz-Signature=4a08d929452f0524bca83a1b4839603864c807260dee32d30ba71b6aabbbb308&X-Amz-SignedHeaders=host&x-id=GetObject)

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
