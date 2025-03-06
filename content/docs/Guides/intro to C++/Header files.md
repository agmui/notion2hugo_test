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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GH5FI7R%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnJnNsty74%2BIc2injvPyPZnAKbO3Wqo85jpI%2Bl2fExhAiEA6VUaNEGHmSdjWUEHk95isIALbQrwEE64%2Byemf2etXaYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDL9iPSkzTj25s%2FkSRSrcA7UyDV5cVBi9VVRjAut27K4xU4AQoBXImnqYx7Cj9uJ823gdHkOWtE%2FqPraop%2FGGTXrdQRoHDYvVDOQGW1DTSx7rE90JLlkqHKPnQ3CBL43lhT3JsIvSh5JC6Dho7vb%2BtMB0SDF2IzvDdwM9pY3Q5s42BcpNbtMs5AttuDEFpBAHjjkrx1FQSr4sia5m2NNd74qe4SxNlAaryPWlgNNhxWNcdC0%2BScIQQljIZp22F51TP5%2BasNZOQ8rHY8hQe1sQutLKZzAFEy3T7%2FNYvFyjyeEFcIJLEV32U%2BmjgCvPkAjkPm2yf6j4l5KlF9%2BgbU1FnD3x3vvYgUxSTNcdc0N3R5cxU3kmQT6xktkKLsFRKZnkIzLuAJ5ocxD04IQn8HgGKHDoEOW4XQI6dXpZItyPZZH34PWOaLksqSd6JHdPdo%2F3dkmY%2BiWFf2TP6KxHBjrjL6wpC6c1gXZqltZx5P%2BZvo622KMtfTf8EVxCOxhBw1CPsfZvwpVXnSlPxUR2nfqIXlN1xE0fWqX8dYlonrL2v%2Bps%2BqW0AGS0N3QKEentrIPkRmmUPCNKmW7Ndw19A3ED5bw9hbA%2FTz7ov9AZ7v3lVn4hQSBdAPj%2FBmSzM4%2FOAr5%2Bx9xy3%2FqxtwiDbIRzMKfTpb4GOqUB909A2KRYXBQ4HdbFILvlp%2BBDgYaaI1jbmLwGcrK9Zy1ctROGyz77%2BUlT0NWAnacIs8cka1%2FGyO%2FFHSaJoVc%2FQhDXHyvGebooNNcNLmt4nZwT84A6vFmPuWhGXzb1pzM%2FDnU5uu4o9e9GCi%2BWh7L0T75oyarcjh1zTKVHssElbuUXujHdmPgwG9PSH%2FPTXrIYI0et3mGAo%2BT8KqyIVN8UatDcLFk1&X-Amz-Signature=3bf27cda51e4cf4c47c0f848c01e4f1981481a507ccda20caaa26617da29377a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
