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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2RCKHRY%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCICOn8LOO9U9ACGZKH8sFYe6rMp0xQOtSMLkNKTG3jjn7AiEA6DcmWDmBCDMnRvF9nHHzrktOZxjXcmpgKNyW%2BSqRxAgq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDHz%2Botb3VoFA8OPZ%2FSrcAz6qAkxr9lvY6bzqT7ZaY9paspjuu57G30TsGiRA3bbqoB194sTnYTCAJasHZ1MB2U1CQaDTw4wT%2BccmMHpcO8%2BpZV4AEtdAlzVqfMlisPif5IMHxbQr%2BpTFI%2FCP0I4q%2BpUw0XYjsvV2Ugfo8v6KsOP%2BcalD8joCXEMxYeAln%2BqRaJOa16G7ktvO8KkEAYTzxkUbnZ7I3PZbxeVmSyO5IeoU59nh2JBRLIUchT6Adz%2B%2B4T2vK5fSzTjeutplGs09LlJ9gzGsQNSoRSBVR7DdVh%2FQ2TC1luY7%2Bgtkv7fL9SW1%2FlVfI0%2Bule7xYAmZ9YQgtGX3rWTXuvhsvwf1fqeh85s5p%2BecNc7yzkB8usZPdA%2F7CZNMf851WZP4%2BgcTAUfGeplEwbFmTKUhYljFCywnmlXQPu5jfo96zt3QwJIE2wuCVznIBwull1SK0U8iRDXYp4dflpO7yRqnKiVDZKZG6PiXwc0WtFeZfd1wYLrVDGnY5MSsZ9bu4Hmb5NCLBQ1y1aNyaauTnvJ6X%2Fi0JePD6rehJ%2BC88ONX6z41%2Fibqa1YT2PeFyK1quY1d965eySI9fUuf1ZTeh5NZD0UWr2OkODn1gL%2FG6i7bLqIKmcsqoSkUrx1DN6XaLWzJ6%2BytMJSclb0GOqUBI7sa5YVQlLs85Xmi6oHL2n537uTHPbLLztwukLa%2FyVVk%2FvlMkmDDqlzuXXUDzM4HsqFpompmSLDGAI8%2BJmHPB%2Brvjd2NXEoc4mYikbLHhomZX1MGKeeL7kvFWYkMnIjcOVDGcG9SwdDIeEI8hk8WG9en8zRi5N3WQxDcajcRk8Z99ZNw6U7nUH9jaw5100yn92RxYRjmkdD3hkWpgN%2BpneYKrNQX&X-Amz-Signature=61893b48c18cf6d7726e278f7d19922f71f31b9eb458344f6c178babba9d7304&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
