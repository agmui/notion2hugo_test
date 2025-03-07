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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VF4FF7Q%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCgtHmpd5fBkFB3iPXSGJFVK67x9wyCYz8Bo%2FiplJqe%2BQIhAIJYbLElCEqLBMc8Jj%2BeJHtI1etS5Nu0WYMM6fVQL3pyKv8DCEsQABoMNjM3NDIzMTgzODA1Igzb7tas9%2F02HImBEVsq3AOFixaTuJJtwGGMbrq10QwTFR04OjoIWhSuBcaXv3ghY1XDaruJ9Mc5i8mS%2BBofvpFKhgr3%2Br3Qbh7pHSQ5K3TrPhb1XCPVf4AG0QdVj6JaIxhyYRXiN%2B9CPhYsygIYtFgDsZx9ASYWbeThH2Yp6DR0mWb9zijvS2aPEKDb4KyqjnOKmTc3Hu4HM%2BEl9XfvYQdMQTk8ubDVnOU0ISGSZWVZY5sINOt8sQ%2Fon1s%2BG7injYMshfor3HfPedduaQ%2BOMfHOgEaBrCKcFPorUrfprdlubrH5yA91E2e1QKFdNsw2RYqldvafyEXNdJ%2BIELfzB4o9NCpBC0No5GQwIzL58XSUc3U%2Fiu8NVVXEOWWDGZk6iQx3KVw6Q0y9eOP8bTc8ml8D4FxX6va%2FmJQ3Mv5FQe7f9QsH0KeImv6dCngcJJExUyMg26Y%2FxAfGLKlMWTh8IUDqr1diGrQTglekucwzh5x4TeU0p7IcMLihOnRsRYf5YkUQ5Ifme4QbjqYCGRf2ucyqnqQDosL2i1etf2vHc5Nb6lKvS2PlHp3mXuYbcGYV5JTfBS0fIAM8hKu3RH%2BoCbhYUnJa%2Bi8o83PGzUM74GkyQNgex5hD00hXhiC94vKqWfpawi5CrI1ioZM%2BDzCI4Ky%2BBjqkAVU7OQRC%2Fx%2BOXm5xq0rzGdfmTPC7mENiM%2FsWIBiBqLFTZZzauvcQTp1S7LVXBOXJn91DkAZ%2FUMlHCTy98NkAtQDYaqXkr4SdBaoXkFOmzgjDNPlEihNAMRjW7%2F%2Fp5dAOXWbvzl6EPyRNmXfmeAIDSbMylJXAtR7SLjUjvaxgr24h3%2FGGz071oDrqxlNG1KwyEwq6%2Fy9xk7A6d%2FDsXn%2BgTV72ccAQ&X-Amz-Signature=fb959fd94c51d04d87871b90e97ce2fcc1c92ea16dabffd84be0062a8b7589bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
