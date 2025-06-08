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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOANU4T7%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPoFRgnRmF0cONOBdp9xAG5j1YF7jyQSqLJXL42QxEogIhAMnsiKIFQ6AXw0y6oS89Nqzff%2BU0hcVsVnPCFu2XXXWWKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz93FM0W8yR5YZ8sGcq3AMcRNAdSDQsuKuYu%2BqY9FotG7CqZ4Y1s4k%2BQgxFUmujBeUqGoRJWUl4WWQXkhQJPIjPxiXkTRc9HCW0DD1Q%2FkEBf420V3TTu8R6VtAEjQoUodyEkVIkT8U2LqWU33VJ%2BqZMmmkkW89LSQBVB9mbhGrlO55zh%2FcWbEZOoUm8wNioymndU44ChHKQYXW7MhzTlu0wpfFxH0qJehrCfqtGQpYu8GsyqA8fS9LpCIhT3NvS2EWaOjV5fVvQOM7akgoJscKk7EAkMBTkI%2FG6SB%2Fw82LQX9C4jY4S6NY1yIZjrAJzPXeiyxrLjYx7acaVM9VeXtth5jadVvBZVWJS27awdLofmeDdjXEt%2FVisuFSCoDkSxOo9I2z45G93TnNv3mlAuZPihmdYNhmecbuyg0%2F4eMlj5Q91qFqYKDiD9ZgEUcJgqe8Xr3%2BE8QFfwg3nzBBnnTXyQ%2BIeS2lCYUNvTwuk1gePsXHxIUQDL16iwbg3NbEwLpdrKWjxy8NH8q3UEplyjPozRZRPdS%2B81YoQxpYPrBI3oLsKrPhh%2FBgQArYIUf5rghz0pGCNGePKUOMKy1Ke8a4CL2H9eEXVwHEol5aY6YljqSTGk9BTc%2F7vRrDBi2GPjv4EAC9qJ7re1J8i4TD%2BsJTCBjqkATaziJceHI5whJaO1LPJdzQOJ67B4zg5R4vrcDCdxBFcg9x2yKILM6zpXi8E20LPPldA88iJtVD5M9KAuEBgMJdD2wGUxekV5xmv29Stq23rPQHoujiBhQGmnIFItXRwNdO%2BKc1MvKa1BkciCzALiI6KWe0JENbFDv66Pu09sv3Y3IMSWhsNgNDJE1sQlweYYEZvqB4g7DpkGEwfbJxScc3Espw1&X-Amz-Signature=d6ee1653a5c42b6e578cfad28d432498e90b2d0966907a10c6b4337308e30a54&X-Amz-SignedHeaders=host&x-id=GetObject)

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
