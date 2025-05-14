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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZESAYT3N%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFa99Goanu%2BF1pGajxVObBZmnqN4Yk%2BtjFlz4tbDN4QtAiAESDw91hrj7kL%2B9CeXgbil42c%2B%2Fum1nCp4qkrfzK4mqyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn3OkBJ0D%2FWTiEgDTKtwDk6KdiwR3%2BQk%2FJIJOcW6%2FBnM3vJEjGp9wTLaQmguaS4FVtOiFGy%2BNKaIjOt0KW87rMDOlfSDkghQIaVzwfrjHNZwI5HWFXny6cLBaZgsVnhyIpG3ash05563Ike1cxblQ5yDUfK7bfatHKjCzNQLq9J7Qv%2Bmzt7kBpOgB%2BcmAcF59Ka4cUo%2FUVMRJrWDtEW2%2BvnZx96lKHLQH17QMqaKRHbE2cnQZ6SFhK6AgwMM6ha87FqnhDomjSWo8m8NhOQqkCQ1US2hodiZXcTSYRFxMz32deM6oyJv6H8d8Wjpfmw0sR29S0p5aml%2FvF%2BSENhBZFSL%2B2OAa0akbD2c3WPWGPU6V76UCW8rDkSlf9gTiLqDsKgQmv3S5eLPw%2Bz3%2FHpJpx6VIwkZM7zzbjiecX4d0vEb%2BjxW2QbwYBs4u3dD6sd7QEcrTwda73FaHRcjDeMLZXHgFLi7rBUzCLIS7AHuA0Wj1d95f2dda3Q6mm1XY65DMPMxaUsX5d%2BU6yoCdM10E%2B2By%2BsJsmG2%2FvV8q%2FQNOlKd8wkkgOrQaLJXSUslJyytFhG%2BOCCrg%2B4HEiPEXoVcKw64Lb%2BG18pGXRE2xPl8WZUaqqHbdKTa6q39H89GpZG8Y47AiWKS2MuRyu9gw36CQwQY6pgHYlt%2FhxZCnQUg5apb2VuJcK%2Fs4mQQd4Qqu7juHcWjeEh2T134LCpdt6iw6fw60dAU8jeNKNbGyaRloC3e876T3Do0TwmW09g1XznI%2FQY7HX%2B31LaguxW0Gw4PxaNrfYCdj%2Fsh1g9ltILz%2FxejjmH0LYvPPhCB%2BoQnhPWz7oqhvAriVIrniy6tKnLnR9jtJja4G2d%2Bus6Lps2cFxOo%2Bt9JKo%2BymQdt4&X-Amz-Signature=8b11b91dc7cbe912a3455ee48382681add556d67b056aeac158e26c0e1ed6331&X-Amz-SignedHeaders=host&x-id=GetObject)

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
