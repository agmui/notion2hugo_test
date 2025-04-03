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
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG4CB54R%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTA5M8uN1kuHj0xvQA2sdEP5fX9dvxEl3UwlRBcZJBiAiBBnvkV1JhxBQvY6PORUo1lVOTtQOQFHmn%2FMc6XHbNQ%2FSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJHLC0FLIX4ESK9LTKtwDZol99gWtRQLt0VZjiUYQdxvM%2BNsBTsMgYRhpU3zyjajZEsH8td%2FHHC2wOGpLlWOcqqVsKE3iRCKW1yhXCiFqULZ99tNmt55N52gRnhv2Qf9UJCDh3YEXIa9%2FddulGqmlK%2FXFSDsrsktSSp2JvCw92vLnPZldoPTWBCPrSGLLIUbtI0vzyJEw8IvzAVs%2F%2F%2Bou8TSDEN4MuummWXp1Fs6mQwPN2HJH8NZYvVH5KE3yurLGVyHWey3bpfZ2Phq%2Bv3hch3Uegm5WwXXHnSRaLyjgRBiPoBvTzBgpsrGXnrCQhbqaPQMBIELjvDbPJG5OcOpL3Ggvb4upa%2FXE9%2B8lb5NXg1P2g7Vb2%2BTVTukFa9blE1XAOW5T47VkG3e%2FroTEwKfa4myOvlxCXO%2FlOTQXm4u7rArEtqKiOod0DN5otr%2BzAE21tGjxbAd5rKvVDw8KL9Ywfw8SrKVw6NB196PucyXwbQiI79dyB6paCx7%2FKvMY0bJBPWwJpwXMgorUCsdTFRcyCFsTf7QlGGpxd98MwykyEsXYcsEBUv4zrPM63jCRbg11dE%2BMo6oPwLbcIyjUQvvhXZDaKskWdxuP5JsOrJleOvkbDxaqhABb0Bcm4FwK5zETuSaxpoLfqOIxeIcwj5a5vwY6pgHoq5eXHjx6zIWLUeWR%2B7XJnyQE5UMHOF5UpEExBqQLuIZtmmskfkw18Ldxk14KGDuZczRiD7RkqCZWXDS3wjxPvvUS2HRt6AiAlwQ%2BPzGFUmJ0nqEzhTDIymEXzXFJ7cC0lRVCpkIiazMMt%2Bnkg13hAKYROpql1jjrV0V8JleKWpDQxW7D69BBxck%2BvczmJp1pmkzPI%2FQaUKPcN4ihKl%2BQPppYVA2s&X-Amz-Signature=f22db3306a62bc10c78476137c89c99cce26882fea0c417e96d493d725a0da01&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
