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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XKXO3TH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEuF45Lmt%2Fj5yYXUwqq9V5LB1SW5rg9mQDSuL4%2BQS2dSAiEA%2FtTYdUKn4hZOKIQq4etC477m1OjMAFCYTsduYkTfxlQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIWDqaoaiD%2FZHnWUdyrcA%2Ff8C8p9%2Fep3KzGCuMQwSoi5mrF6IZyreZN%2Ffw%2FwwGZjdMCRNb0f9VokPoXeyiNo%2F%2Bf8cWpGFrvCzfUC%2BOYpG8Hlq4YfHuRqbxjDOu1lfSIQF0Fds%2BpZ6pzN4SL22X5J7Kwxi1tnW6ByzHLj6Xr%2FvfqgTgSTlkPtv6h5zqHPqSXgZJb7MgLe5AUHCmOUUj2s5pgNwOA%2BqMWmg6YyqVAduzDXlhf%2FjvsyVXaFTs84SmuOQaaN1b25VCXGiS4%2FxhdV5jm4FdNhBDAHX2qcYAkuzR6yP7XZED7t0f3AZXYDr2Afi2iUfryUeUlxqOzHmfleTjTzDAgRGNJgdUkBGvhcpv44h3GG%2F5%2Fe6ATMYvbtJWT3ljrzKXFaq7LGlYWqZrVO418a76x5jiW4575mY0xh3Hj9llDW6yMsUMCa5w2nBRvgB4QXF2gUtjVhvPAop70WPWpkZ5oWyV%2F3eJ%2BSmfaVqL%2FfezP6EBl41n%2FYZ%2FwH%2BRcFiWpsdlQbKR9obwmMapSyqbewy1eem6iRD%2BSO90sj23%2B1oPwbssNh0%2FuoLiIXbpVtUpjgjUO8TZcfW9hEEjt4Wxon0MotPPeUQqCw2oHf%2Br4v5gco0pO44Y46RilbNIwBQinLJPRAtKQ5qbxOMIvSj8QGOqUBjaSUNmP4Egp06JoIV8FclN0an5NlrwbiT6mbHu873M4QtGWqQPRwxLCdKZF1FR26CrjJBVwmMA6XRfPwC0jYljygQRVeQe063BVom1OHq37wMAKQI7FVUc214nXgP6vRv50UNPErBzx0c4QkTr26fsDNDX3BF%2F7TlKr35AxIwOGp1GuSq6FJYfN%2F%2Fe7bjWF4as9rSPE2Jink46DDRr7by0HrLw%2BX&X-Amz-Signature=87fc21fea72235ada06a1e1d2f6752fbe22da77147b03ac4d20af59ca27e41d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
