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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HVG4EYK%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCt4x%2B%2FOp9KxA%2BubjlqFMU%2B1y4jeKbsMGbMSXwr34FAigIhAPWfxieCu9GPVxro0g7tmhbYCWJDGL36nDAAp8foAuCBKv8DCAMQABoMNjM3NDIzMTgzODA1Igxqa9Hg23DaWdz%2Fxikq3AMmc283zbVchBnTgfgaPIycuM%2FqCI3a8TYL3gPVyDIPU0q4gssfI2lFfkNH7vPXI%2FDS3sBgQrjo9ovDbEo%2B2D9hfXH1CnFbF36W12ypCJ4BfYdPVHAYTRjrIpN8fw3%2BKzUEk1vgTSXMtQlMI59M3NsO1TWDo3Vgnei4LgIyddM3duML7WIAWCqzOVjZPzfIIsPSqTwfMkXMpr21fItxVm8GpE56vg5DCyiVYEreVPs9uAGAIGHoJyE3jYFzNPVAkfe%2BY8xVKbA8KnQIJAFVPWpPG7tvvRQFEz6QnDuLoSDhq6oLmDmHelgi%2FRTJJ6PI3WzLeHfowZnxUNEAhjoeRYwxJuBmjd6qqQ4e3buz2ndyBv7cTokN4O%2Fl98O3b8csxVdj6xgYmMQaCD91dRQ3Xpy5kz1GVla3Pk2xfvn3ChUbFmvOgbKWJ%2ByW79ep8ZGsMzl487dWzzBFyLjAFvI0Co4QAkOoQM%2FjJBUPjf6dkU741tEQfzz2vFHllAhsKtetkKaaSw78NaLTNBZPLKLvaF1LZ6xK6xMkZhJGwQcpccxHg3tcQ%2BrXTk7AxbEZmwIIW%2FZFw0C8OL3EZpyYFoFFftpvbWM3ey9%2FUZA5Zd3Hg%2BWyu%2FnGjhKQgfNBs0ysKjDWu5zSBjqkARHOez04xUTSflaHvhLLSKLgy8X%2BitBXgIAzdxMWOG862ikGSpz9%2Fn5q0USRHiPqoTqiEA5LPFsioA482lN7VNrvxjM%2FtUCaDvdB6IDcu0T26%2BFRILbdyRM1jOsp9H6%2FJar3hsahERH9uEchfKVCZJXrj%2Fe63Om1BAI46Yhlfitk%2Fcie1WJrf4WOCtGc7S3R6pD1tE84qyqggd%2FtMZY2067K70wP&X-Amz-Signature=7b1fa89429ce25b718a0bcd80ac98b9d0bf076778578e7351e9932fb0045ebc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
