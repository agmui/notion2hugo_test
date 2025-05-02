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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ITSQW7M%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDUS4%2F6CbmVdDlJLFVEA5pIZOaWHHNeOBdDrA7t1KPUZgIgX5tq5VKM2XCDGYV5GL4zC%2Bx9GD%2F8d5iFjvonzm80KM0qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcIiUWpV%2BUK0QM%2B2SrcA68Md28m%2BIw2BN3I%2FtaiOcQf0%2Bevn5AvTPzhVXDZZGYBiRm2jj5y6ObWBYGj3f227FZPTCHQhWhHCSDYNdGta9krkL1I%2FCjU0lEXjP1ZZ5J6%2FUkRJ%2FLdWCrupz6VS56jTclhbm%2FpIe1XX7pBpBhMTwdTio7m%2B%2BkpHoVLgO65hnhNiRyASeI0BD7E8SEXjjhxVais2VS4akT4n%2BYTzQ8YQStIj4O3er0MlnaOf2dhdWHzbDHAu8E1xXmE4srXl5EsrWMdm5cPmSzgZlyTPkRmVijT11804K6rez3AQxb4jGiRsjBFhf%2F5ojE5S%2B2e%2BhTR1bSAMH8IOOR6LQaoeBrVjDpaj8X7wKpnEw2ZaC6MJKVumqXInlBLsDenwUUvdUW7EjKC1Dk1volt9WdcXCtXUFLSAmAg0kj38apgibBOt7ghNgPdKuxNfLIhbUVSGpRdn6nF9uokwyvq599OAujYAeB6W9QbLfVEq8Fp70RpkWNy6LpaozIExMBgkUiTU%2BtMff1Ki%2FLjOMNNlNyK0V5Fl1sDh8oLgn0%2BcYP%2FiLAC4xCjF4DSVcLtwKCLIviRkPDx4VrtjQunDX6rnhlyq%2B%2Foe7Dk%2BCQUkWvVpbElSizPsOUv2ZsK%2Brs4KpnHW%2FsPMOaz1MAGOqUB8Z16znNcsAmX%2FcpJEzBPAgq2qonYMIhUog0Y9AUBinq2Kf%2BfnZUneTHy1OtpOTEhmrfrF7FPmHMCphZHHJhetSyIXXbpZZSgJNpYi9g6B0zNaUb7CQSeClILTdJotmSiLhleMOLt4uxm9u1Qto8Xgcw78WgwUYhBhBilBD5VkVrrKOZL2bvmQKZpi26wXBokrEYBFNNKjmX1JedBPhTi04EQHpUR&X-Amz-Signature=ea206a7893b480fa06441999c9e026a1fc3720c563addf7a2bd8fe0ff777e66b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
