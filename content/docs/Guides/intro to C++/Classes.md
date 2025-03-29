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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ECNQHR%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDSSue%2Bgy8CWnMhpxb5mvO1y26ApWRt%2BPozwH6oJ4CVXQIgLQDo4%2FB3Xlxpf8%2FEnl%2BgcXNEiID1rydb%2BI12rBv6QVcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDH5TdR6gF7A%2BHELpkircA6CpWg468wh%2FdjaIWplv35GRqkSN3EjwOvM1X%2BttxjsJLpBHriyFodmEGzNpQvO6jxkjLexq1wPdROm3eM%2FREvRE1Xf34zCa6jo2PMxjZTGj3LmrhDDOyOMyfmvb5P2OcOiH5iIyuuyZnwXnupA1pzHjwC6e3mgEk7sKbMVsZMysekViqw41Qw7iLa2BfFrrDzOQ6ZWY34FMlVAaXKMEhJ%2FtAgELGCLlebfvsy%2FskbUrdonzsv45dR9npxQ3lkdvi6cZPCsREQtwMiKgm%2FZ4lFnUcXVNxiMiu96G%2FqXMOkQ17MdmDYZSJ7qvsmxaFufgMbUPt6lMjBw0mGI%2FR6DRGp3PPC1hU16zYf9Q6GdP5NlkE8NpPpJS6pjQhUjW6hVuhTiuT%2B8IkJxXmHDpWIxE7RzE4WP%2FkoUVYpreoZZ2ywKOUkqK%2FftVPofRObLcNkvq1Xz4iYZ0rhiC4EwuUjSycUoJibgvyGbUnWpOnoIHMpQPLxRgBN%2B85zI44ZLLiUz3EVVraeKB4Ip9Xk1g%2FZehJs9ZQtOmLFm51sBMxCUdGMhvYuzER5hWn4ZrTNZ1SbJpWZ7LRLUN6l1nn3NHXmJ24UMA%2F1fxwRXbLeBzQERyabkEuhw1dAmNwuBWmok3MNqKob8GOqUBWYvItAjA1u2W9MCVZNw0CIAtD07HO6buHC8rnxsnX1%2Fw3XPaXoKLQ5MKK8rCpLIC6EbuuFTgg6A4uhr4IChl4bNQov8LISBunAzMgDFKZlcS3UCjYkIzVTyWecuK7IO2FiCcw0EcYOJuJZs3SlhNxsgXYd%2FXsufFLWeVN1i3togavZ%2FfrYdSV6lW1piPH0dixDu2Oc5La2yS8E5L%2FEmHgLmDIDxE&X-Amz-Signature=7bcf53f36c555cc3c8bfdf7ba53485d65cf332cb8ab4b0e33ff9f10818b973fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
