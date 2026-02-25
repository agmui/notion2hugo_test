---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

</details>



`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAAUEIGR%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBjTjJlauzg1rU60RtGpQApE3ORx0NEeX5PfCe7xrZpDAiAkHcpIngP36aiCVhVBVPWXuu4po%2BquY9qwhi9K4WyKKir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIM3Q165ZLI8WsKaKnMKtwDuBlcEAxSTwFBznXQ0wF%2Ba2%2BTudp2tzJmZPwc6BSCug03BQ2rXQJB4IfsuYqrBm%2BToUlaMAzC7JoJMlB%2BwEnyrClHi3uAC9WcKa0PhmnNOKnDqXhH7n%2Bm2y%2BJWTCaOZ4NHxMYkkINQx0nyOgSFWlMVatWRmUuII5AhYM7i1%2FQaTnQ5Cbtq%2BgXINRQ%2B88ovO%2BuH4VvWIOONNcRurWmCu7zEYy6ra8c7BdIxC9nqgW1As5j4FMw6nniqZ4RUWvOiaSjhNdpVSLldVM17gv2jAe4Oga8oC49xuFd%2FaIfp0Ge0deMObLHI9MjpuWwXxyyRw44hoPBA6qZVZ4p4MHvtQDsT8nNlihvhX7dbipyAwCbrtvpu0i2NUMoKqE%2BYTXgzJJ%2F%2BfHoVXFYO54LUTPkOjkecCZQrC%2FDSj1YhXAy1FJRlDCyBpu6bpCldUmijbN2ledW4yz0E5WclmejRbS7gLR5tzXcFT382K1tRd%2BsHp2Y1Cjk1xDzzweCcEhWm1dCjW4zb%2FvGbfC%2BXzXSCftp2ogDryph6QcyAUkTQrVh%2B6jtH7nIPUCfImIVhq5HJr0xW2G%2Bev6gCYoY%2BEUe4FRwMQj4t5xj99FmiyD4RdNnBnb9%2BI9XhQVPNhazxLcgmbAw24P5zAY6pgGCTMTMIq9aNQxuTPMlURCe8rHVsFt8v9DrMF8Z5byjCHctIWaF8QM8N8Rwnf2pS4%2FxWG5hc4japLwkNYbeK2KFsA3a%2Bij3u2Exgv5a6pLDeWAzKdi5p3Og8eP%2BFUQ75Mtgq4Hys79304wZnyCfQqUjEtvosWoDZwyvweCUAlo%2FJdD%2BDrY%2BfTsdlIqfWXTX%2FdN17RW7y0LW5JXRtJSQeRgdYDkTu2vP&X-Amz-Signature=9d3b66b87136d0e14978af51262963fb128432861194372008fca32231bfe9a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
