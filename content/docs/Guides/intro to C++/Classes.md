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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKVJZ66R%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCgevf4ybB52skwvIAemt5Om0fOuW3u3ld0q9WxP1vrWwIhAKhiJRxO35dP9x%2BwMi7bEPuzocscIUZ0fLY5CYbVE2KxKv8DCEIQABoMNjM3NDIzMTgzODA1IgzbheHnIbWJMj5ynWgq3AOSbahMz3ypQ8XOsyX7SgUfLbxQIhColXMe1g9Y1uHUkFIE7UMUJZ4PwNDRKWXEMvYimte3NbU%2BSh7UGem1C1siZqwUnPBc%2BcZ1quMjEBcU2osLAcaE5yhozw8%2Flc2ZSn8hTPbjwSoJASaRPG9jsr339ZncqaZnWqNRlUTMoLgoWCwusoVH%2F4inbzhk6XAoNxK98UGFJ10I8ou9Skf6WcLvE4TfovseZUJ97HoYAKhY92JvLs7mcia6h1oy4EX4xJNMDFTeqh%2Blid65Jyl8scS692BqhK9fnpTJecoDAJdxBKJFmbLsvTzLi2k5504ORKawZKAQNhBScZCnbXZuUizK6n%2FBTxCPT4rjbW69enXMNEw175zMiluOB2XWKKMMCd9Le8c4xshENNBIWjMYM1ZxDCTe0CAPKrzYBlzhszSuLpXuojCKOgoBcuYLjd8Tb1XBQou7L4rrTjdLtyEYasGy8ITjo317cwi0MLClTFPf3aypNqtt1MR1VqN8%2F1pkaAx9obmRDYsr5vNS5WZMgwpmAp5tGvVv7brMcnaRnSA1XNvrIBainueBUuppzvgk8fruFkXXnHdZcYUC8DxhnTTE25NHol2Onv6XrN1433cgj7AMH55ZTJkvnPqrmDCusdjDBjqkAT2bIdAALSN8SO5ZotavEzSd%2BP%2BZLmDjJq94w0q2DkCzu4iqfTJk9Y%2FRysHQED%2Bxnvm0LoL3KZVDlIZWdjMdIDaYz%2BtsdrOo4NXB5ViDx%2BjsmX9Ecbae2FOixtechQsYyTnkrG4PyTaIbA7TFNLy47grc%2BLkhKVIDKPVxFidk%2FLlSebMMPDCpkK1%2BGp%2FO5mOJxlldC9CKrTNycmRumBh92EKgyuB&X-Amz-Signature=79af04f2a20f532e80f66600ccecddd4a951e8b4323451b1eadad3bfcc486cb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
