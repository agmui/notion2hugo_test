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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674T56SXO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvvDmgk0JC2%2B01sK6Wfjx6HymrjDt2udPvaH6DkuN2zgIhAN13H8C6iUnFaPQCdISRUMR4wuNV%2BmDI7otDyNJVZJymKv8DCBsQABoMNjM3NDIzMTgzODA1IgyYsI2l0me0%2Bl%2FEuqQq3AN0le9uNKs2oHr%2Flwv35Te3bpVZmD1qJJOwDyORpGQ75UllD7V9kW%2B2WFDpUIeoLvfnAJ1AAjdCvN5%2Fy8KTNhNPYJCoRVieh6uIzhBiVbHZXCymA5XaOP66dyTwo0ruXwskBZ4LanxaoHOvyOgMmOEE9TMcVrslsI9nxrThsRU5DT45Byynd9rIRn1xxzT%2B4kynqSxGo%2F4PIapSYIL9NgZ7RA5MxNkczYtZMwQtUnxBTsd9X5sOkjI3wOBEwhFLjflBenGK6j2P7b72YomROqDutzp7%2BgFR%2BuG%2BQTlFBvqXIBNms1k2RbvvPke8mFe6IaPXUDni5%2FF5bAEEwAldo15g%2FjQ3lzTSBpZW9Bs9TdZUn7MODCSJK8nICzqJS9025aUQXEijgoWfMN8%2BcLaLzxR2vVSdA1HhX9zF8Moar0XibYeXQl%2Fbl0Uj08UcJ7cx0ErZ0Oy50icA5F%2FcsQgO%2Bt6W5ZugSxvDISSwVPTXR%2B7gDwubugWLPt%2FouUlntp68POfCQFbwJax1fS%2FHNF9uqkL9%2FyeErz9DaCfuN6IA5YNO9Zkfmaiwc8QgtZls5vV3%2BOH6U8%2BHehW%2B%2BWka869vDsb1KOBeKnKURckN5mIWkTso%2Fg9J6BVJZzwOI8GHaDD83ri9BjqkAUDhy8d%2FkXfknn64KcqCBXlsWDGpTeZjCt4FO1zzYCUjJRaSB2GoQZCoiEe2AeIilhrPQkLhins0eS%2Fb8a%2FDLNCve0XYbbzyR7rnibpPPCfM5Bf48KO0GXHI7sj8labHpq46D%2BEHHelwlKGoCT1WENgygygC5TpQYJrbHN%2Fbs0h9l3fcQ6%2FxLGz6cTXTKJ6RlFO5Jtb412nn6Z18%2BXRJvkHE%2BS9k&X-Amz-Signature=94c92bf92228900fca8454ea31dd41f6840f772f7b859c2f0db9e9a2637e9e03&X-Amz-SignedHeaders=host&x-id=GetObject)

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
