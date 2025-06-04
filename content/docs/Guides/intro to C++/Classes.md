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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQJSYL7E%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDiiSx3%2FS%2FnrBYBf6R53xJB%2BIW7ikj1VOPYFJyMjQSlxQIhAOW3Cu9WUBMqyvam7FbyJoH0bz3aRjglC9Sdh9CaseuOKv8DCDcQABoMNjM3NDIzMTgzODA1Igy%2F9kW%2FLZxaH0xDPVAq3APg5EpP4F0N99m2m5omK1LOJmkx8lfFi7PXSHLnG2qBBLBRTCjergrvgPFuS8cbOPlVS2Dy9JmaAWYc%2BW%2BxsaXXB5N4DgRYmq6xTsAI%2Bu0lrOhnZarCPBW06GKEgD7L4%2BinWHj%2F5OAxHP%2BRnIONKoSH3AJVv8GEzaG8OI7%2F1aSEVHYyqv%2FX%2FXwsgH0rhfVZUe%2Fp6oSzzv3WhR7BeY2nP02%2FK0l%2FcXgh5uAgVteiE3MxCRunxz2ZqXDSF9ZZ%2BJzNF7wjI0E2JwbYjpI6Qs5rJTU1XyxckPozaNGQGNgu9Na0VE4V4SgDqO0y8VxlpsFi4I7xiNk4Mf%2FBZkyx3Bh4ktopj7KjDZSd9btpZ3e1XF51TMfLNysK7NY8xFoThHnL0zE6H0VuDWSftH1dHpuRxI0MpCm79D479VJaEZLzfFL4zCFKFQ2l2dToZFEPL7zGZ6jQPlDmfB68s8UGvbhG0pGlawA4WAJ%2Bf3NlMlLe6FOMOefDajbLwfDyDtIcxuq%2FHplSimftbEIIFP6NfV0s5QPs0zu797lfuhV89nCokPJt2oo1HgSszBYW1kEu2gSUwZHqLOaojRtvcvHSJudgAM%2BH8ML9vKvwOEVAhq8I8P3IoVuC4vEuddrTiC%2FKEzD0hIPCBjqkAWqChgh%2Bdw39INx6OkJA%2BgnVyUsja9sDjMfuktljsEq77YsomLTegFpP1YdgbIY3AwlIGsUCG2WKochSvhlXfVCYDDbEsQxbAR025OrJX%2BZKTkVtHEOc3t5B1%2FEPP4Zvxehzf1r1PTg6NveaeKW3tcsLbxScm6yMlfdNR3zgW6HtH0kawEigYIy8ONBPVumye2C%2Fw83193ky1Lo%2Fev%2FFDB4CnvxP&X-Amz-Signature=f07913af28e728754644448584ad2689e81e5fd843a05a4459f77a9e921d7079&X-Amz-SignedHeaders=host&x-id=GetObject)

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
