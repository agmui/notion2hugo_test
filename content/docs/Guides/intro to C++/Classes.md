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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSGJXTB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCPwQqhEzyFMWLYtIu%2Fq8kWncbzWFJQwK%2FzknkactKnlgIhAPDGseetuhv%2B0ZraajTHYrSUYafzCPXflVW%2FvoUZhzCDKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwK0HhZvXSSb44yTz4q3AMe26t9M%2FUR9fYfh55EMZbc%2Bze7RcjN2KslmWN5yhJ3PWBH1Doc0K%2FpDENbk6ZEp2AQZtTxXxQf68MQQ%2BYGYqKVz1%2BlBdGwUfIpFXtx8Kf5t1ghrNWPRtY%2B%2Bt4IWY3BPWQ55WP6y%2FywazEm%2BCK2n%2Fn2PYAHjy0LT4wHKohgcVqqm7Rv579FIpl%2B46YF9US%2FFsje%2BLReiKfauxvs%2BrutPso8QwYmxg9%2BqmcvFZnxoKx8J5mEWbQhdnW5IfycEE3v1blorG2mNqBdnmKRWMhXGBL5VDgnDlhTSoirEdW%2BSRYk%2BUg6uEw856O85a1VNxmmsEVTgP21DqEScf%2Fiw7yVC4Xz2A5fluo3UxKvM78onGoEPiMjcV6SHWO%2BhwDlPj%2FgxL%2BJQV5h2rjWlCeqEIEtjdU2CE8NiwJl6UB0E3z%2BVhvF1yaQNILqh1Byx6x8Wz%2BT470m44cjuXQ4zchxMJzfCFr%2BQdRGcgLZ7CM0Fa8FgZeHwe%2FIEo7iITco9RCguM0N2g537v%2FSv8j1SukYC4Xb6BOPD3rum4%2BrBqCDlcjhiEVC%2B5AqRjsijPTcpWHeFEgJz%2FMSBUQFtXiCgd3mtLlQXpaLoTwKdpn3DNHgXOWS4yTEVhDrNlcEcKK7U1%2F02TCm4%2F2%2BBjqkAerNMROK50MTzBjKHoi8DWuVZ0WiRxL884tcgt8QVqLehXUlqimB%2Ff9UU3rhNxw4D6Ng0z8ntGoObqfkIXkBtrMiWootUnPM6Wz%2FNClqwd5tTD%2BG8YsT2u0J3ti1%2B51UxnPXspnAF%2FthRMW2fQ0W5dDR%2FeGnXAh1ILpbuE8jY%2BPFqqsmWaow7axSeekyyf%2FnqWZFZwRmjQrFiWt6SvDunry%2BJWcG&X-Amz-Signature=1a5ea1ca48b47f541e68e4773b4bb2b96ba80a92e81e9a50c3c1d0a820ac5b5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
