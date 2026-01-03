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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCAAM3Y%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCHaGikoNqiJPb5eBWEZ%2B21MjP4dxwzoDAYOuPhHlU9wQIgBHW%2F8IjaLTakFC8d4rrgdBFjb5IsntsSp2Rfc7n3ZcEq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDN2zqLzEUcTZF%2FxY9CrcAyTHx%2FobjvD7z9yepB9nPpLKI5KsrJxsC4%2BxQJH3cq0s%2BNjYChuF1DolbOBNpXXTjUaafd%2FJLWvmf8yX6MR%2Bf9ypIjdb4BC%2F%2Fjupm%2BTlCsjkarLTc1ywHlYlVohlVUViD1l2uwF8KJ%2BKtRZMSxUM6D3Fzl%2FZhpOqq9YMvhch2boBFJYUfXXcAf2oD69URo6asr%2BZeDw3dUFOqH960QLY3nwm%2FqiPBTSMcaQe3WEwBF2YPCNRp9bms4dwaMf55mMxX32wsCG3Bwd0kJ25QUDj%2BZF2mj%2BeDo%2BKR%2FD4LV5ENUct2uudTeDQkIfwglfcpnam4brCmlwS2YqrB9r23y%2B2SdZdH%2FKVv99mO2g%2FX49jBCD3LNjmM%2BqfjVLOGY6lfUJa3TVNKg5VgrGe7NGczUVBelLZLIQwnVeTNwD54Hb9YlrkbkSkR41WPYHUFX0%2Bzz9kX62CSurvB5LBVBmEtm6s3QaD0cE0jOp2L9aNduFWshxrdNiN6DFdFor4oHa2El2HePkgORiYLKlihab0iSTYr2MrVXaCpwsK99vVPdo%2Fb%2FyaljBne9tga9ZuTY3BucDdnftNRi0Twgl%2FCPQUJ%2FxPjOrpsJbk0wmrVdRuNgtlloPSYHUjBgFau5DZVGwDMI7T4MoGOqUBuhw0LrLic54rEsJOdjymZB%2FZ9WYNYZftoHdki6yuPb23Phm2lHiVW4nlVHuCWs3MzkK4bLbHLwWDqqEF1khiTD7tRrKaS9cygBSNi4idYOyOKNcg1LwT9SuaF1wHSfKD2iW2iTr8vYWPHIVHrGQTqOjwzYAKWE5wIZWYl%2BawceuXpr0XaUJuGfGw50TBz3i15b9ACl5QnxgW1e%2F5QaqGA0DYuNjs&X-Amz-Signature=94182927ea7017feb3d846dd444a60ede47f979c8acb9143bd888f41a132d7d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
