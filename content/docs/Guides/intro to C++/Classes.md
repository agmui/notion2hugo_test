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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQJYFKFY%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyurWFuy9KQ9oXl2j8hqYEB0nf4Hwc003N2THw2DqTSwIgBlKfHPBXnvj3w%2FwWhMwQkLnQgMywY3l1XHGIH2F%2FZ%2Bgq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDA5%2FFTLRBF7BMdigQyrcA0IAMmSVIMLK0%2BECHjbOWM7ZLLOFGo0PFIm2wvU1gEft7FJ7Q0OT%2BRrSM9QS8Ds2GveFW0cIJtpOCC0pWAx69W7R2VvATittmZyhUyEBlcTLyHrKqK%2B%2BU8IJUmqP%2BYA4LtFtElj7CP6I319bj54m7HPBPnL2yG2o4pQWY8ZbGol5988gV%2FHVpT2kPVItKr2c%2FjF%2FIr2VViHYnWHEExKyAH%2BNltbW8RgqBNYiU2wuYwt4%2BF5QRw5I9I7t2F6kmu2uJHj%2BWo6zPITo%2B%2BKKBRu85F08yxkNNXqcCiID98e68icHUa3nDW%2Bk8GsbkG0L5dgWq30zB%2Bf%2FgiJd5INRy1q%2FHQgsF2pkSf%2FDdxiAYyjKHbu7BjaQfBJeyQfnlKiKVLlu%2BHMqTBlzDaaaf8seEnSBzAm%2FaUk7c0nxtbMYy9W7Tw4n86nJzQz3RYE5WsphLfirvVT%2BsG7b1sv7z6ra4J%2BnBjLRv2fSqKC91Yyev36MMlj209hYFk1Zc%2FGIcBlC5nUxOmSggFoYyoiSta%2FL2jKMgm994HRwxZ67y9mQh3n1qGxcBYmVP%2B4UC8A9ZRYH7c8c9fKDMgAs68WdjLNy1BylecT7kwUZf07WhLz0MSojEao%2Fu8gLSDdRvZ%2FA5KG4MNeB1sEGOqUBvIqYCRVwzlZh459rxLM2vC01tnpEGV%2B8Jpx1B4XWn3t2cCLPiSgZRQVQPAJSD8xbvDmYSrjEDP%2BW5BipNXt27Ot%2FDRZn6o5qvIWNvbpX3vG8woKuAC9DchnfGb5pT5G3Hp1sFhwOuUJUqiE%2BtqDq0JginuvXY8ROYsT6ZAJD1B%2Blg8q%2BwVjdu%2FbdZmlYe%2Fj%2Fiy6g1cbJ4TcZp5F60fhHKhtxv6y0&X-Amz-Signature=628bfaf9106c7b463cc009bf2f60d710296c3f570e9c60f8b20b38e72b324baf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
