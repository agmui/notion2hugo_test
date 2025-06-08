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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OVKCYC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS3M%2FWH5G8%2FY%2F0uzHMkXxctKVfzZjpSqoMxFfHPpLd4AiEAjRyxdGflpKz%2Bu8%2FSE1WIckswqJR7q4LblJd9tSam2dMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEQBceJmKhNFyw5GircA78eI3fozMjvZgw97UxjXDETY6%2BMLUMIsvGJW0L2F5Q5l6tdQXWgLnzsbROR2ZpQQEGos%2FTTbZFGld9K5X9R%2BqKcqB%2BnG2A5F%2FoMvI0S2tPozC24TL6IkiSb96qtCV8YHfPrzcUZN0tegmvd8x2mXydhPzZFOo2sWjlQksfXCog%2FtA6ByZjzZPjN%2Bd6kXx7r97W2s9nWKiJX9P31E2J%2FTHrOj20M6DVXZn9D0KXQ1Oc91P%2FDeuLoBKdFhrIW2CDF038ISf6dPel2qIv2h717tsAVUAFpHrQWO1Mu%2BK9injgK7Mw4U8zPV3eh00ZTsmgta%2BNHEdET1ZnE0WZgseKXYqYhUzWT3y9J3mhfn2xGkmgFJEvgdq8w0mbCW94W8bbZ2gcGKZPU9k2wv4190hOaR3pgiurc3Q63sCk7q7pRrnHGEca0ALl2qfz9AY8f8vUVlMDt%2Bbb3VvA1r88WeStPF7z2uynnr9wgCGWQbF0%2BAu1J2JAO9ite26r0lUebsP7xLxXCqjG00q5is1wQ%2FkLUB797TQ8q2qQgWLEfpIc1MZ8HUFRUuhJTFrspZiJPF0jLk7w1Q%2FK2AfB9CCO4bJmpfp0mlblj%2FGlJJtIPRvMaKJy%2F51fpme6VgcHGtULJMLGylsIGOqUBWxLUd2YPU6leHnpGa5AaGIl0ppBIuiY2S2%2Fa43ZD%2FC2UetDykWa2QM%2F3FEKT1r%2F0kpLgAf8Vwszv0oLeHDUgGMVoGaVRZOMPrbrnWqCmscgw4iUobldEM3Q7%2FBq0gVWn6nYxP%2FZXcB4Y8YqvCZtMPyWhBmQ8q2bdT9CJVBtZq%2BZ%2BFgvBpMbvj9GYkxUkScBIctb5YJcwZjn81uEHfqMLpgZTGJ6I&X-Amz-Signature=fc37608fd8181f29ceb9812e671bbd5a0784f729b3c667bc58941be6ea04542b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
