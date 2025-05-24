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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIDB2NUS%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQC8wBSNHSHP63G1GRD5X3Pr%2BFF7c1l8zHZQuRuO7rIqzwIgLOARNp0O3aK%2BbSmxb%2FJgiASOAipeM%2FblhWqC2edFtJgq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDP7shPSHK08OJM0MVircA3OlEpNr8aVmcWBBsJY1McOxbQsZqKrWwtHheVHwSPSsZIEunsdVyfnz3GjL7mPkYE%2B0roFID5DjsDoW1tASjzUWnb9LB3w%2BVgzK6BLPaxdJLYFSInC8pg91hKtZam%2BeGNCwhN%2BMCHHuovdlJwf6ndZNiRYuNk15KWeAdBZy5EN%2FZlP5znv0WpvQHAKNr7zYquh9BKW7fiikqf8Mb1UEc6LHIGjkLSEJ6e1ok5mhyl8jxYZw6sUAJ3F1UdjA8WZa1sSadejlPYC4X96P74lsa7kg9u%2BLP1CwAHkEiPTpVazDBRt0vseU3FwhmI7%2FiVD0PNAAMFIt6v5it9k0AjFr3JahdKHgItlXMDBTGsQGUVFvcWJvL8VQSpVCS1T0l6OHScs0Z1D8zhggXHFalkZBSuSppRIlP2I8gQag41FZWDgSZfYmbH3NHBSggs1tf%2FQgIEGPe%2FH5P8dZcVgU5qlvS3bhq19lWaXxTocOWJMJVqptaZFgfDfP2riIkd%2FyxiaRdc6ZJqQgdL2ovnr%2Bbqyt%2BYcHkbvif9vALUDPEVSLWKeGyk%2FbXNIZ04iJO63M4cwNjcFQi5fiu4BDwSxOOUmEVrJGXejhCVoac%2F76z1Gv8ktFEYt8dfjJiLy32fLZMJyAxsEGOqUBTleC8tVFGIYEI2adoZeMyg%2BOPijSer3TxBafv5bmbLlKF%2Fl6CWjGFjZURfTDJ8QZ2%2FlT3zbUIk7VL2YVesUJozjv991Iu8ecY2flqJnetzzoPbC5aRYZibodjr4y%2F23595gqSyslwnOIlxuXqAlFIdP4NlwqA57pVO%2Bw0fxWn3MgTl%2FlVPfTPV0YtBw8J9zSKjk46uVbupTjg%2FUdSkgYc6wmrX9z&X-Amz-Signature=be6cc5acc69215b7c27e46d95b27d31f4fb390c6e305e8d589601294e673aeaa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
