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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRFKJWTH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCICh5FA21JeaNnd7CMuPnYSU4hc2MVYYVnGbhmh4ve%2BUbAiAyhNZ8D6mQ%2BmkWFld%2Ff%2FlSjkvbMBkqR3OrE3sBdAsA3CqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt5ThiMrOZ9MB1b5nKtwD8ESbvDVPyQQ%2BPUgNiG4Q37ZGOQ4okU49hgsR07qHzMtu%2Fds%2BRO46vjoP78x0QUJkgAvP6e8oG0RvucHoxxOmGLvy78judQYpg0%2FeJxJqDAvd0%2BaSC13NaU5zmNwUNDF%2FVlljF6qDvzPyfLt435MnsyggOZz1EdCiC5MYeWaujbk%2BQaf6%2BpnkxyS%2BwPJbMQjnt1qmyqm2qX66CX%2BPYBNQri8o7imgrO49n3YJSRzGVT3%2FYqg0Eh83%2FA25zAL%2Fyod%2FKGloAmVmGZ4taAZIAeUPy2LayiFg939h3nbLbgDFSU86eTWYf2T1A6X11IsDN71zIajxzpfsEg80fU6WKGCWsXhIdjfFz5AE%2BtMQ9LTB2EHJ7f5v%2FOhP%2Fa0ty%2ByrKBeENguFrh27gD4AbmkhEZXSZfLCFuxbrrEMxRNlGW5DmiicI5ha4B4lJoaVcn19tmB0pBvDatd1JxyVrjV7PX48lmvOpBjP188OVTNEVjVvt9p6rBiIUOeZ9qWhNtVdfIO6nnjoiCwuGqH9pzOxm64Ip2vq2HXWfulaMJxHH%2B6saLqt6ilzbPieIQ2X04jUFzFRPx3w8cPREBhK4AmithX5nb78%2BDVj5TSW2%2BEShWcH%2B16uYoU9SutQCJlboOgwsuL3wQY6pgF74yq9BVyGeYveYu%2FmijKPO1xCLqPDxt%2F074c4v%2BkGhP1RJOYmpT8DSYkiJum8LGc2R0AooKwEbjQGlnHjnmh9xOM%2FEpuC5Mgt9nSBrbEHikmEvTQLg78ZGpywJkZDtK%2B9q2Of5wS5XfsT%2BUc5rj0wddw2EcsILRB4DgljfXfcilxuoSctf9M50mT1Rx4npvYnRcK%2BfCGaO9YqF6NLWk8psnSnmbR7&X-Amz-Signature=8ecfb9d62c6aef27902df273898059dfd2dca94c097e27ef8ef0b380a60f925b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
