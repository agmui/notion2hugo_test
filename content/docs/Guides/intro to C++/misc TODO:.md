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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRK347A%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIDerPbabUHD%2F9Cs67zgfEC1p1UUUSeDwtlsav3ihw3MmAiApWgLlfVZ7Fvud%2FKG2CjgL9qdaqsLlyHxKa61FWRZlmyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqac4nVRDxJBJ1xahKtwD2gmF6IHDCLIIrAoUyP4SEz42peIGo3Tc5I54XdgRqvascR%2BYNwjvHgIugJEOTmK6THhLpmbJ5aYI7ZvzL6kUplaUil5%2B1oDh697U8s7ohqy6nbEiBuPTw3ulWolgJpHwQC%2F%2Bmb00eo8576uY8r4H4B2waZnePFXviVUooYTvetk0WQ%2FHC%2F85PBtES7Uu%2BCflucx8XCiS6hpRfp1XcvhrbKp2OCSl0nh77hYJp6XDzYm1YwuZMMQqipeYqswG8zTliYzmfalCMHyxJSNd4afs4f%2F3EB9bpEK%2BGOWRygKB8aLuE3%2FzgN4QlFzVeLGmgzWp4qOvJHHY7vcQ1vT2MOEvUVdY4pd9AsR6QaOmx%2FpTPDr4XoDYpx%2B5VOXIEvHa1KhhTxKh0IFl55a0EmzlXPEflpuxVLmGSK6JTMN7ZEovpU5jk2YligAh1GU%2Firx32nL%2BNDK5f%2FzTqPAaxMfB4AWLZZY8EqbdpyyoQzu7PFnzqleMGGOWlRqhMfRGuyppUnc%2Ficcyc3kGIgajbz%2F2nnSFCsITX7qcUVbzKH805pE8wuaAxqn0xPbhtxR1FkT54w9Fz3OAisr35xuWgjh9bWpcbmLnjYN3LKNiOYgf3CRHiUwpN96X5WsZiRjdQl8wgPP%2BvgY6pgG%2FDplZeIdkYOJmd51jsRcP5ZNUhOj7liOOFjMccMXSM4IRE4hkLDAvdg%2BaQSHHBts7nROHHKZKLniwfEAwa7T1xDmeslb2wM%2FngT%2FE5QqdeseTNjs57Moxtko4A7yKUzDC2x1hVDXsHpj7sTBUW%2FP1NsvmKs5HD1ChXTB2rIgO%2BlCuzh6hLhAhpAA4tD0lr0cYTD6mPSXXmPI24NjdadJQvidpXa62&X-Amz-Signature=6abed9647e3f7982cdbf85bc7172c31b7c31cc9b79ca814e9c1473b9a2d9af84&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRK347A%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIDerPbabUHD%2F9Cs67zgfEC1p1UUUSeDwtlsav3ihw3MmAiApWgLlfVZ7Fvud%2FKG2CjgL9qdaqsLlyHxKa61FWRZlmyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqac4nVRDxJBJ1xahKtwD2gmF6IHDCLIIrAoUyP4SEz42peIGo3Tc5I54XdgRqvascR%2BYNwjvHgIugJEOTmK6THhLpmbJ5aYI7ZvzL6kUplaUil5%2B1oDh697U8s7ohqy6nbEiBuPTw3ulWolgJpHwQC%2F%2Bmb00eo8576uY8r4H4B2waZnePFXviVUooYTvetk0WQ%2FHC%2F85PBtES7Uu%2BCflucx8XCiS6hpRfp1XcvhrbKp2OCSl0nh77hYJp6XDzYm1YwuZMMQqipeYqswG8zTliYzmfalCMHyxJSNd4afs4f%2F3EB9bpEK%2BGOWRygKB8aLuE3%2FzgN4QlFzVeLGmgzWp4qOvJHHY7vcQ1vT2MOEvUVdY4pd9AsR6QaOmx%2FpTPDr4XoDYpx%2B5VOXIEvHa1KhhTxKh0IFl55a0EmzlXPEflpuxVLmGSK6JTMN7ZEovpU5jk2YligAh1GU%2Firx32nL%2BNDK5f%2FzTqPAaxMfB4AWLZZY8EqbdpyyoQzu7PFnzqleMGGOWlRqhMfRGuyppUnc%2Ficcyc3kGIgajbz%2F2nnSFCsITX7qcUVbzKH805pE8wuaAxqn0xPbhtxR1FkT54w9Fz3OAisr35xuWgjh9bWpcbmLnjYN3LKNiOYgf3CRHiUwpN96X5WsZiRjdQl8wgPP%2BvgY6pgG%2FDplZeIdkYOJmd51jsRcP5ZNUhOj7liOOFjMccMXSM4IRE4hkLDAvdg%2BaQSHHBts7nROHHKZKLniwfEAwa7T1xDmeslb2wM%2FngT%2FE5QqdeseTNjs57Moxtko4A7yKUzDC2x1hVDXsHpj7sTBUW%2FP1NsvmKs5HD1ChXTB2rIgO%2BlCuzh6hLhAhpAA4tD0lr0cYTD6mPSXXmPI24NjdadJQvidpXa62&X-Amz-Signature=1740681d43256dbb95aac99d30462a4406a994035d73fd45252fc1ad314c2078&X-Amz-SignedHeaders=host&x-id=GetObject)

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
