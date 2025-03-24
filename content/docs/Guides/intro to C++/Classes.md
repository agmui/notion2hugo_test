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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFSHYY55%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC84EIvdXBj0PBXl1H51ev4hvC%2Bod0HIy0jarpQQfdpIgIhAOi7Y3eg2HKzp8IxTDgjOSNldlEvjFP%2BvvDtXrmwGCrDKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BI4Z7eH2%2BUGZuKPgq3AOoC1OrgDPDx8Rax%2BJUVbzp1w8Pr2QplKpiE1J2u6qmEL9qXQDKrDo6lqRxbwVtxL3mrkSl9Q7%2FcMCoiN3ErpgyrVn7IVy%2B3IyxuOag11uJqUOHVSwasBwC3AV6bIqe9jyu%2B475Arwkx7h%2BAL%2BhaGdk1wU99t4nWynAP2AP47GdC8DZHbD6QzU%2FaYJyC1Au%2Fvb%2BxiYITf7rh5mycxqG0zL7G2Lcqb871Cfy%2FrQFDgR8w5XfHafs3DEf6h1xEWnm1zJr3hUT27C3%2FqcmDlKCLC%2FXvng2OdSOW%2FNaWHsusL7gkW2xdW%2FxOZL%2BOFRW3qJivvs3lHAK1%2FG0xXIvOSQIIIMjJrUgyPI%2FoXX%2FCX327oWrqNZfb0mKd76iae9vQI2vRgeW8sKd8VRGrAiwyd3v3LvkwH8uPONjVkTwr3P9cIF0LarKNt%2Fm%2BbAda8ARreDwkX7YKmRNNpy6lDy8Pn9%2F8OW6BlpGHSOio9%2FLMkzS6bGRIjwAUwuEj0TPjQ2EXgNn%2BsjDDIkxRbLBalLxqrxyrENpbhtQHzXrGplxXf2x3%2BWMIvm7AYzC%2FbnGD%2BVrYDPjUSQcADF9id8OSasYH4yZCxAbmma1b6wJetveV%2FU03dGOIrokTZriwMyQeOn%2FjDDD%2FYW%2FBjqkAb23NzrEhVjf2lHcDGns08tj%2BDO0KFImXnZlyDau4mKeSTgqQboKxrx8KMeK9kWY34N3fSL4182nZPXV29RPv6J0%2BqWUxvqkafuHCoHYBczOzU7%2BnrV7UIowrFY6%2Ba02n97VUOErU7l%2FB0NnLyqsIHhl3HBF5giIkynobcoziiKs6JbphxUc%2F1YcqsZyoVezVydsseQLMM1AVDZ47vyPQNEGCNIV&X-Amz-Signature=5b3b5c7b88a733537adebe564471850f05c75755c606857a3831e0fc1c50bf6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
