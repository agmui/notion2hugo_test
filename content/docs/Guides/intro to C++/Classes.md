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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHXKIZMN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T180957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDTRadWJYCr2c%2FrKmA4jPo4yPb%2B4fga4cIhPXpydkCyuAIhAIh5%2Fy6%2BbUn9cgsnixzPo6lSZpBq4kEDpFmSiO9%2BbgJXKv8DCDMQABoMNjM3NDIzMTgzODA1IgwAfsE%2FkeL4jKsD7Cwq3AO2JoDpHFaF0pTRiKXYjMMdp9BTu2wkyqAIkYdBZKAOg6PccFyVkZ5KIK1YM1%2FDa2sm9bGCz5Sn5s3U2oNLtGzcgrJ7qXSpLnb1wrJezbEYY5ovX1ELy%2BlBQfVG001qF6QaQzBFZOfLAaFi%2FMRkuZXhXlusKjC1fjvbAMm%2BNl4JnnTX%2F9pwQMoL8A9%2B6huGEU5ZIy98rMQSKSjxuMkaS5XQEHzHirrHvAIrjE7LyUahpBaBGrxtrY9KMtdLmIxGRllj1w0i1zy4CSNFwsh6ST%2BcjIwHTZ65Xs5Sk0HK8pQkgSGyJTrzjZ31iUmlMF6fz7hKLZwhcMvedJ5%2BDOLVezL0pe7Uz9ad2GlOKPEySMkFS8AKCiHPJsgo%2Fwf%2Bf2J1Y7tEMLwzQ1wprcVK0q4h%2FLbHYjnqQd%2BHNktAttidVuDahscWJkvAj8T0Mz454Zk5b364R2euh03C5yQ7nneixX86Bv83yDhGiikGy1AdpSeMQIyQH0bS6VT3f54XrulmtQ7AiFEvqsbna4r%2BDLmcm6RJVfiTDA8tnYJpMY8YG%2FPyXekj8%2BhAk9NwIja3hFDeEwqz6llwSDJU24JxDpvmz%2F1FhHhwBJ8fmTXO5MhR1xs5CCInLOdYwzsHhpA%2FHDDl%2B729BjqkAedQEaCU%2FjbKdUHX6lj5pYWf5ahfxNG6Zrm1I9F%2BF0x0OgNk5WQtWfEVdeGrhE7h%2Btu9Phska7SZXo%2FqPtbZGYd7UxVnYON5RNMgSnVKNchCy2sgne1JUXRLZ3TTXlPdh0mE5bxkxeVtaxzvW%2F5vBPEHQpnvG9ECbn%2FGWZYEVLVVRViMz0l76CO6SB4bdV7qVFYvjhgiRYwxsvH%2F6Ckwgdyrcp5q&X-Amz-Signature=144e84d9144d2188924ac867c3fa5b2ef03a2a3019681c0c3b10606b7f2d5db9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
