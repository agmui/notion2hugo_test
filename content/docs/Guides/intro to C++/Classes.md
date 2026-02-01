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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5BDEVN7%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4yd2mUsxqo2Z4IwE3otA2OJ3BbMJxcCugXtdkQEVWsQIgZEN4eHF4fFPsnJSqBRi2hyMXm5oTdGkrpsvoHIvu5f4qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQIOEKS%2BWZZ5RTOKSrcAwEkJambbTIwaIrImVbUS9yPXKkbr8K9mQsdKtyX7xsyURiCjFxDAdBobXw93d3LcMD95E8ZT2l33K5Dnpb%2F%2F9sQK3VNQzW%2BSv8PSAyr7%2FhaQI%2FtO5mr%2Bx4QJZC%2F3LcaWZ2VvDcTwj289pFb6HjeaqRlv91cVGy5Ux0flx71xAWCC4doyADYATZKspumhakoqM3HdinTRoMXSNWsYG%2BTGOOZI8abupiNXgfx24HpKtgYOqUYPOKO6oOhkWvzfsY3tcDL%2Bzba5fsohpVp3atX01peccPujobESbQVUDclXe0foEh3V%2FqFe5oA5NtGX70XC%2FTbVPjcwX%2F%2FjXPMu3H%2FSIK4i3ouXrfIst60Rq6608lJlYPQ8YakxTe5P3Mr1QYkuiyN7Zbj3LAmfBJz7OPqotPo4XNUn4NAojjKYLVveirhOXS6qfVpxbnqG8u7qt35QoW3kAGvkyxfgwgNgqcSmap%2F1TZq1tu5HlqwEciI0X4SiFJd73oJh3GtW4AGrSM1W59jBRrMNSvHYSjJ3kKIiTTkPKy13PselypHeRlhR4lwgYsnhvCxwc3QRsIiK7iEhBdmGmYI%2BbRyK1%2BjfTENjXOcDkaFGKy43WcUCjgKG5w2QB%2BPMCwZ3qfNmAI4MPbx%2BcsGOqUBOmCYPGL5LfWy6rIHa6sgl4JdMjHz%2FhnZEQehsHIPGXIvlNfAejB48h7liJ%2FbLe6aXrGYyOE9el6BtcsN56f6U5APfc5aXfQT74kBfrmfsEHTn0OrXVKoVhUI2Ja2qI3xMs2KReFIcswy0I9iKAqOX2q7a4gM4nEIOVVErzbHA95FOFqe%2FkMzyWBfh5qw2mvKoRQPVHCff2PuPonx9Uidp1BPAhOO&X-Amz-Signature=f5c74defaf1ddc904fdbf7aec6cdc0f77bde961b9cce1583f41d6b6fac981dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
