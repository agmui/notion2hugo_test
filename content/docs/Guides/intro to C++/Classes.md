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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSGR2Q2M%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVu3oaRZfEavcFf0v6ScelfKQlBYagXhClUmWl9lZmoAIgSyFuaX%2FYYluYchldDUr5Bk8WqesQIjQE%2FFzKs9B08LEq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDEUYSKwHQZyK8DlfyircA0zZf%2FkdlHNNXBsDBUpZAwIIK0JeXBQFUCi8fFdN0Ha%2FeY8m8Gk4zltBTvVy7oiGM%2Bay0AzJioIRKg90yekOk%2Bzm6mWh1J2MVjz5zdJCj2RL0pBTV2FWlfZljisspTnNsndL%2BJ7%2BO3NRUC%2Bde64J2s5nBjyAK0G5otlRidbc9k97ZyF1OOhZexgG149iBV7f9163agpUNMO0KMmgCEk5B30962C14f0br2zI%2B27%2BWNjr3qqC1lZ9Gvughl7JHyfrq1t06lsI6PXzSVQvmI48ec8i2RTLSJvJeHbJVqBUi9Jj90eE0JpMXvjmylF71fAMGpGe8%2FDtE7fNqh%2BEfOBCWjnWVHVHfsAr4bTAbEK3dwapHfpMF5rDyySIJMTt0LxyyXmiQvW6c%2BxThdXcQVvULFia1AC%2FQHz6%2BJLL%2FjGoPnVAsHhj3WWp368nlq1VyVjasz2CFk79WkQyZy36VnQDQ87CnlAUF0GroZ16swvtlSdDhALu4K7H1PETp75zGyqlrIsf9gBnTerntu4eblGHaMp2aYvgHidrxJskQoQnVGMGanSXkdsIHB0A0X7qvSdi119h0%2Fo4SPm7ABwoGt%2Fl8%2FAg0Fk3KnvTi9I7dxINe6w9tK6kXCxWvoP2JMGLMPOAusQGOqUBzO%2B1TIsSlL4f5xfxBOv2zb74serrluNExe%2BUIwfihsgeEzJuHnSQGqffj7I7Ip2kFlRV1kSzzfF2cu8Vgkd0CN8zF%2BbZMmN%2FoiIRChL40ANMNZAUby90J9ar3z5jiKm%2F0ATrwfrEeK1F2kOWkF2BGGCzZE9PLiuRfgwmUAns3Rzgr2HLqpAOqim0oIdSkSJlCKyjM%2FGwWB8sr8%2BHCvgjddz%2Bnlr7&X-Amz-Signature=53c06e1fb9af1e94126172ad5df4200dd305ab9114a12f780d3e00f423be1679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
