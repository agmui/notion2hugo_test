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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWO4RKJW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeT7KwITXwPh5NVK5w2R7gEV%2BU3ZEf7%2F6AlVaxBjJvEQIgDKD29RpKEHTTYL%2FvTDDWT4atCeHWEmtGGSrsoTYxiIkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNORK82ONnwRN8F5xCrcA%2FWXyeGjWFC%2BxfsFy71XqSaIDlVLeoHNS7lCsG34JbBvM7uvETPl%2BaKDI64zVXF5udkzgLAvc3Kjy05BxN%2BemV3dS%2Fdb33BIOU7QOvsvbi6r1o3CsBJ%2Bhfh95u5HPUKf5zTNXGc38ovkvztcs0tWOhDWdLbNqxEIwyk9BQmjU6kGA0JCVRbAD20kZfDSYE%2Fjytol0mtabm4c510tM0vXt4uQ2HJdApTUVc9EgDAp0AyhzB%2BM4rX0lH4s%2BdPynY6rRJ%2BGqRP7ehkZRsBc%2Fhvhu%2FkGwNQaKa7oqqEJeezBoKOruN6Hn2dsp30%2BmuQJToRhB1Ztjudfqu2HnuqzJhS0447bbpdVY9Qebpc2v86qryMCDw7c1dEBwnO2O1YY%2Bgav%2FeekQDBVaXRQlO7GVBbpAyeSb7a0tBNp8CprSsRhfhxq5IvFYyl2CIxXYhhcieJrMSAxjwsgcDADlk%2F1YM0tRvvOWuzYr7zdTGRS5FLGK6KnSXC5Ln%2BUzlUWUNIg6Qv10eSJFotJYogp1fuZxMAL45EQFc3Sr2m9A8WiwKymUMp5kXyhA824boPUm2W2nJ9SQHjAAjr9r%2FYkY5cYqCZvcc8rixhz2pF3bYGZlbA1qi74WFsHQJx4SniZd8SZMI%2Fo474GOqUBaxj%2FlIcWdXtL3IL1BV5I9iAfpzPx7XieHokTfwvEvDFaMZuLBYTKo0b2yFzg65xdQsAjIjjhhpvn8Uc6lWqmlX8kiYGv8JSlf9yPRBOmLnmIlMYEESEOhEJdEwb0%2BaipjATbPjPrvI3GtBxiz3HGzdVhEIiqlo60ZOZE9t2n41Qr6I33n8AZYFLe1Mx4srR8yULIpmkggba4Wj%2Fy3zosf%2FHT%2BpT1&X-Amz-Signature=5a2c753417260e6e3eac65704830702780b3acc3843d836b12d92bc53e4d0797&X-Amz-SignedHeaders=host&x-id=GetObject)

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
