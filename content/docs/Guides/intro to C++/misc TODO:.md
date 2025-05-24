---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWWRZR5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDtFK5r6BKVAdHvBDzIsKZhg34ljLuV298j%2Fc9fs8irZAiEAkgfhF%2B%2B%2FSTjQKVm%2B658a%2FTXZ7PXWSakK%2BfV9bbLJPh8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHB8jPDr2v61gyrMlyrcA%2BbBWOE9e%2Blk%2BKrOOb7a1hMfLRs5HNBAfjGCMCWXqDxfmrE3b16SGCSSCYhZdER052g8hnHJzf9QQSfy%2B1UTtuN1SoxQNfE1M771IHX%2FnPxT5RM4UOeDeqWKNZvT0zdL08ZQw0S4BfzwNXt6i1zNE34fME1lY5dVkbj9dgQ0jbTR80vgqQ3IbzsYl7QXWIZuHL3zgZPbsUo%2BrcckkZ1TEgMO5YuDsq9uNgEdC82yACHY87ja51HpSS59udBNBBgwcTSabIU2Jty01ssYEGG3HIig4%2B%2Bsu8pr2qIOZ4Apn0VSyyhOBNBCt9Prxf0aKOJ6oB5oYGeoVT9kNgrf%2B4197VyoSkinD4nhyQt4h5PKM6iFdvNN2X%2BgD8XlTgxJbWM0X%2FIobOtJeXqfZoH%2BF5lMP5pZ7IRkD3HsPOvoDAsF%2FJZ%2BcyoTftJtvzW6R61xdqcMLigo7VEhO8RufR%2BTsY9zN3rJEhfBDa4nOIicAKWqhtDEZ11yZr3flWmm60K93CFDycVzXbDuwAJeGhmJ9zngWLeykJFuNDxdrcKC38cH5gKVFStCybLnr9oRv4TsJQMaybFzh2u1dabi6D0LAQPOulbLl2XbGTkWzb9qfBgAxivT5HwRVZPaXZ9nRpBYMImWyMEGOqUBUNYSBB685TmSuGujVtFWCzJASeMRBenYKZbR7rBqjorC0LfQfauOz6j3yP%2BRVdIQfSVzrLze5TfuAsynpAWkDZ4XRF2FJZWEnNSeDIFQMpCG1OnxWEcGKfjVxpGLBl0oc9TCrdJo1omWtMEsd%2FkSnqZrITc%2F47a1keAF3yuHjdg9wX0HUrUhPt1xJ8%2BD1m%2FekOXOxReDh3pJc0x2ZxC7YF4%2FBzno&X-Amz-Signature=febf2e4875bd1b2135dbedb8cbd9f5ec15d4197ff95c021c81fbab88e356048e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWWRZR5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDtFK5r6BKVAdHvBDzIsKZhg34ljLuV298j%2Fc9fs8irZAiEAkgfhF%2B%2B%2FSTjQKVm%2B658a%2FTXZ7PXWSakK%2BfV9bbLJPh8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHB8jPDr2v61gyrMlyrcA%2BbBWOE9e%2Blk%2BKrOOb7a1hMfLRs5HNBAfjGCMCWXqDxfmrE3b16SGCSSCYhZdER052g8hnHJzf9QQSfy%2B1UTtuN1SoxQNfE1M771IHX%2FnPxT5RM4UOeDeqWKNZvT0zdL08ZQw0S4BfzwNXt6i1zNE34fME1lY5dVkbj9dgQ0jbTR80vgqQ3IbzsYl7QXWIZuHL3zgZPbsUo%2BrcckkZ1TEgMO5YuDsq9uNgEdC82yACHY87ja51HpSS59udBNBBgwcTSabIU2Jty01ssYEGG3HIig4%2B%2Bsu8pr2qIOZ4Apn0VSyyhOBNBCt9Prxf0aKOJ6oB5oYGeoVT9kNgrf%2B4197VyoSkinD4nhyQt4h5PKM6iFdvNN2X%2BgD8XlTgxJbWM0X%2FIobOtJeXqfZoH%2BF5lMP5pZ7IRkD3HsPOvoDAsF%2FJZ%2BcyoTftJtvzW6R61xdqcMLigo7VEhO8RufR%2BTsY9zN3rJEhfBDa4nOIicAKWqhtDEZ11yZr3flWmm60K93CFDycVzXbDuwAJeGhmJ9zngWLeykJFuNDxdrcKC38cH5gKVFStCybLnr9oRv4TsJQMaybFzh2u1dabi6D0LAQPOulbLl2XbGTkWzb9qfBgAxivT5HwRVZPaXZ9nRpBYMImWyMEGOqUBUNYSBB685TmSuGujVtFWCzJASeMRBenYKZbR7rBqjorC0LfQfauOz6j3yP%2BRVdIQfSVzrLze5TfuAsynpAWkDZ4XRF2FJZWEnNSeDIFQMpCG1OnxWEcGKfjVxpGLBl0oc9TCrdJo1omWtMEsd%2FkSnqZrITc%2F47a1keAF3yuHjdg9wX0HUrUhPt1xJ8%2BD1m%2FekOXOxReDh3pJc0x2ZxC7YF4%2FBzno&X-Amz-Signature=435f5e306ee97d1b9b169bbf7bf1dcf5747d94a9cb26fee80f8baa994a720b6c&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
