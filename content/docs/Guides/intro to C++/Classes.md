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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH46P5JK%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFQWlzc9gDlj0zwWl2QIHqHc60jNSUm7kdOFmuyBz6yBAiBdY9MgC0GyLjuoAw8J8vCeHBgxPRu%2BRnPCgROZSX%2FABCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMR4JK3rAVzuQPyVZiKtwDzCwoN0Cy%2FcQpaPWU2GD86%2FKhWtqsrOQgThHpxGlbLkrAe78xqir%2F4vHrdhPf5BN9OqahdQ%2Bd78nJ872rGL9AZ9K6CXH4F6uROf%2FxzTBlxeRpXkazCNbWAtMlV%2F6Yu34yA8%2Bk3FeXykG9PtMwSlSyoR6qA870JWIbeOkr%2FIBqRWcpKMLhzwitzugJeRFHr5w50h6JzZqG62PskIxSX0vP5dZ%2BDPLHwLP1oJ1QfhCucS9V2gCgUlIySzLSjrl0grIXVwmzYG%2BixVbZlQyQdGcoLMkuyGmF%2FG%2F49DUuybusFki03qjoa3JtmyVTsdR4CUDF27u34i0Onp0HBPXvqoaCdtMikkQ2uJyhooYavkbrJ%2FTmhH5%2FUWxKswGydFavzTHcL%2B%2FWq7o9GIcpem52jrvmg4DLsZX3Nu9RHX4coZY9NcykNk%2BnPePuD%2FSFWwef%2Bw9wsOAxC8lyGXZ39Lad%2Btiu7aK9AipEKfHgjMJ6895rwdb896wxt1dhH7No%2BieFUn3Hp9ltWec9UVrdn8X%2FTSHsvw%2BSRCGHfbx0mrwdQqBjSPQSR14FC%2Bgn%2FckqXe6cwalq7B%2FK%2FbwCIPUbk2Lhw0Q2KNYBL1A7brNxzZlUqbfXISn1AJ38XGThxMRy8a4wuoufvwY6pgEus0rh3xAPW73tvZRG3dYSlX2ODe36tOiAVgmYSnlI1FYqNBqZXQUUVASiWT7My%2FujlpHmy%2By6Ve%2BiM473XlkS6VMT6M2TtJl3VizWOnItapBtbrsBPN3HTyvxkqCvb4k1KndFe570POp86eh0PpkeqQtZcpd3hwxrH1oPxSERcxTPj%2FhoWcRZXz7Pme9KISl9eqIbyqnhOMitrE1L%2FtzYU6uTMObw&X-Amz-Signature=b8248fb47f6a857fa3393e3f7f947ba9927c786709b38ced9f6e11239dacc981&X-Amz-SignedHeaders=host&x-id=GetObject)

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
