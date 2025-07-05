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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNEXNSAH%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICPtDDuEtTjPzOEpwFQnqBBIwQuW0Zsn8h5xhJ47uWA3AiBT0Ol1%2BnRIdKUnJswohPs%2F8i6CExHKfyDGv3JJytjxjSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMFvp6f6zofzc%2Br98iKtwDEgH6uJlD%2BSCA4wZKLXXi8w45cIvZGAVlUkGO2UDXG%2BFuDDaL2LwgH%2Bz%2FddwxdJnqq0j1usyc9bMSlDHAz6%2F8btc%2F%2Bv852wRR4V2eSl4rjq0ymUY8mmSMtX%2FIxebUOV5tmljdCq1YM1HgK3k2ycaS7iVNvXd7AxepgXLLK1dDS1bWRWuRFBEUNyuL9mn1wFQ8QqNaXvqepzZMqjOg97S3nTMY7y8h46VuYY9h30VEgy3BbCQ9EyQgBzLcvT42x66PfcSosdX5zAbpOPJruIMw5Etcd3HmBxexjzTp2F5yJ%2FcrpnGwQrOaHIeomFwyd5mu0qnl20AuY1lQkPyIEzXH8O8fPrjRHR0hKWM8Sd1w1%2Bjjlzn9VsGIr%2Fdb%2FbRJicMhKT%2Fl4eoBGHxwSnELTmndg4SgqdS4JweGkgZZKBaTIEWcjC4O8vjf7w5PQW5iL3yWrLj370m9sXOv6%2F299ZgUncdgEBaVXCVmncdj%2BjHLb%2Bnjo%2FIRjAZWqs6kpehCfzRSfwcFXr7%2B4MunMmuOneMPy4MwO5QpqjIn%2FJMoPkvmsYa0%2BOyhGHNLAY2iI6aaBLoiIm0rJEwN%2BZvq3tJy04JV6v66a2jpwKiEAU2C2OSv7IFG%2BlgxcO4fyBFZ3MAwwcikwwY6pgHxl2wYjDs05%2BqAd4jqHemnM9B6tMTBcQTWuShp1V6Zpxt8pZt0sT%2FlxbBXpxRZokUs6N%2BdaEQkPYKsxxzZy2TKlQM9oQRI%2BbY%2BGN3cFWDivPTj2OEBze9DBA6HV2iXUAPcd9jIcl7oyuecimPzyS261i6xSg%2F1yUhdDiRx5gxVIlDk6PyXzBzjVQwFQRMQsFzmUVrBZXELyNPuIeKvs7FIs7ekaDki&X-Amz-Signature=bc58dd7eaf9b90ef51c33e574d3017002b7519ddc02f43ed6d3c22f057dd803e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
