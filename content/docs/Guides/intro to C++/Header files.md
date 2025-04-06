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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X352RDMN%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFl9GDIHIB548Fha2Oz%2FAsN%2FZ%2BQ1wvxABgUX7YVIE3bxAiBPL9RszbIMxNdEYUJxqT91N9cthy%2Fg8ES%2B%2FzpCJmaEtSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM9KyJoZMDZi3qtIOcKtwDoWZNEx%2B%2BIzdXy%2FHHHOQwm9Vh99Waet%2Bq45tNuNCuPWoTxlCJANdyVUkrfZX%2FAb%2FaOiFCKqn4sxMBl%2B0jDtSWskWzmw1bEey2cm0%2FCX4VNQRSNXk%2FWr8JQlDrCA8WuBdX1fTTD5VygAuMxi1N%2BjgQc6NwFMafZKojIUF8EWlK5WNYksBwPlY7XiVaQu1poNNcOq%2BMv%2FWorIDE%2BfzLNVPA2ae45vqEsMOX6QJAxWpYpaBk%2BMYJ2coCFe5Lt2ehg%2F3H7pvFf0wL1a8UJiOlnm8y0CvIUC9sj0pcU0%2F0qQbXgauBQ79xjEFLWc4MAme0OCRDEr6x%2BapI%2BOTVQ5n8Eh2SsYvQQ6MsqaamrRVfiSZTBx8Gv6hTGuwNp06vht2qEkeBUURkR8cuMnKWTJ2GC3apo8g6tlKsPUy%2Fn%2BHqnRiCEkceXyQqur46LRIeL07mt473P%2BgX5Jw%2BeP%2BIn3Sr3c2QsR3AoBSODTAIbexjXZOv%2Fb0bX4wOjre6zXQ6CTIXil2Q3VlxuP%2BI46blnSGqH%2F%2Bg9xgIZwt0f371OH0uXotCUx8npD5URJV%2FrEc5%2FcwBEAFwEMIFTKvgO2B0bV%2BH8VrnPzHoCCetfXBvPj%2Fcuw7q7zi0Kpm%2B72y68%2BkbS4Yw%2F%2F%2FHvwY6pgFVKG1M%2FJcgzReC3m6R0K06Q0OgJ89zJp%2BkbG18f2Oj4oBcSwHGbX1cg0N54ysMTG6Vj%2B6XcTo5NViJnEC3HX2bjrKFcuhT9Di5YhrVxa%2BZQpiCv%2F9vmdH5Usr%2BXRedFGH6dXYFHEyq768%2BCugQBV57XW67V6tmWENSZhn4QYGoZcgnb%2FePSJ0HhHml8rt4PE31lLnS2SLOyUeip47GfZxuX8IF2kyH&X-Amz-Signature=be75ed45d0c7e8d24f8168acb52a324b23cb1872abafc118886818206130081a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
