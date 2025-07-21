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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P4AIY65%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5aWRNYYcwW%2F4p5ZaS5HAK4vt4CI10InIwHGCtJcYeuAiBpyupcIjgYpqfQto1uKMXPqQh%2Fu0o3qjsuLucRK3tKcCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYO8%2BOq%2BKhwnJ6FGLKtwDEBD6Qwzrx719QnXZaBcNRf8JisDsBQPunPRiXEbpd5rWSBh1SpdTPjBNLr1BSVhkaicNiGX11GRG9RedTSpqA9FxohWmt2so8d2MZ8pZufvsEJ7CnuR25OmWMY548psVkhT6MyF60H7Es%2BTpHQokOR3ELCtKv1KhmwYzpQ7kgKxr1QoecWhvzHxubOYGfyzC0DHAoDY8X%2Fh7tsGsdYL5zXsmgOmjfy%2BTfI6r9820PmOvTd%2FME6N%2FifHAFrDG9lzjcD2NvFX9FJl4qMdN%2BiElqsX2TooFwz1mnhZbUunRmosbBdlaaeO0enmFASnwpBbyB1E%2FDt1d0hvzrDEd985ZsxPbBijzY8Iq%2Bcqr4SnZdzE%2FG5X0FqJV8KAEGtAiydDz6nGck8G5OQZBzrms6JPDmTm%2F0MtAHteoOczhT1op4pGFJzaPmBDpJRuPDpq9jWPfzEMKgNcvOAp9F%2BcCIrmZdjMgbDUGEIcDeLDOb19kywekQRtF4DhwPHtFb2hKQSf2AcmR%2F46s0cPjiC5Fb7ZqcIAjTQv7zsiJrG0pmhS3Qmg%2FZuZ9R%2FHpgTCFBB0zh7nN2mqHnKuHd4W3QeSHscXNjByA8K%2BriwbfR3xA7wQIe7pFRBycysdvHPaIfKkw1535wwY6pgEfhSeJS16HgyzllEDHcjScpd8jBpI0ax8pHEqpoxEGt%2FYupSmBzyTNkCLj%2BkPWlKS17ESyB9CjHqvE3XBFhlRDBb0Ls6EjkTHRSPSJteojNQ%2FPe5hfhI%2BFdxaiC5981fB7PC%2BPEIvgqRYCL60p6R1JSM1xoTfti3m5wMIZNvpKzK2H6JB0xuTK7ocr2AkGeAhB2ZwzeYQy9bZcBQkHhDV4Ck4Zrf3e&X-Amz-Signature=5cd442becc91e1cec83ca6a9bcf7d9241ce210928607a8ca1eac8bf7afa86422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
