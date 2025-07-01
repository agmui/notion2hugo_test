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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEIJJ5FR%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDMDN%2FYBisyDRutSHYSgFFFux4o%2BPm8olaY5vZkmRdOwIhAI1gV2Tt6d32vyTH9s9GqDszIchZNa9BxJbGwFZZpIPOKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLiFPZ2EG4rstoJvsq3AM7mk6qe3yQc7L%2BiXSThrhfXE0hdxpMYrUgfpxGhSCSiJb%2FesVxY2R02qdYAfU0iR9Q6F2SyceLdfzrAQnvvTjR%2FyZTeUv4Wt77Bu866XIdSdJN0%2Fhi1KZMkiCsxnosuhUfwmY02O7A6JvKnxOvkiJPMxq12FOeGVTlgAmpylVT%2FjZXJSVs6%2BdwQtoi%2FXWopTxDFgGvoKMnxKQmzfv7OUUQWCWRl9jPaBOv2ZDD55nVWFii3NPSRgOpyGet%2Bqcc5KprcE9lnxlmbhz5uKyGo7ZlUOsF%2FiK%2FkCPQ8ig0z%2BBIsX7jafrbiEMe5sUgzWvl8HQ4%2F2aaYgh06B87%2FyOXiq6R1QZHjdVD%2FgwDw02UD6KG3rjMMO8Jzk%2FwfJ%2BfPqUa37ML5WiKEi6VDHijzyw%2B9JjgCqpI4xTtzTnxdhlrBzX59nKJoCxVRUrcJp%2FDFr9jxVxHE8KOkxTD0bUfS4Be%2BxWy25K2y4g0HZCzERXvOjtjeP1ZCPaQclSb47CUJNzsCA%2F2p4Lxg%2BHABHHU7kj2%2BPjJzvVbMg0oyVSRkNPOGvz6MwvHan4p%2FwNZN5iiN5P8pjKzsA59HPcnWK%2Fb9HZcUUqtTAF7TrxSCTQ7tQPHEYcphfn9GlEnfE6IZ%2FsCAzCp2o%2FDBjqkAeNATPDCCiZlkIbEw7W7ah6oTJ8zqFq1ngKAvVi57eTXVwUTMvuupDgiDFGdI4eqmeaZifl6CIP1g5eYFhZ1xLOxYPHWW2qq3ASVtgJue2jPzkcKyFAWgt%2B0usqXpW5ltcagg4zIEjtGc6a83HLAP1aQhGh1ha74N4eBRxFwLvFB4PxwJP4loLhG1N%2FMd7Ls6SjNzF5cyFimSojA8sykUUhXr0Vs&X-Amz-Signature=6d0fcb5d788d3aa3aeeb8fa7be739642e1b6cac374abdd328ea4942871b05ca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEIJJ5FR%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDMDN%2FYBisyDRutSHYSgFFFux4o%2BPm8olaY5vZkmRdOwIhAI1gV2Tt6d32vyTH9s9GqDszIchZNa9BxJbGwFZZpIPOKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLiFPZ2EG4rstoJvsq3AM7mk6qe3yQc7L%2BiXSThrhfXE0hdxpMYrUgfpxGhSCSiJb%2FesVxY2R02qdYAfU0iR9Q6F2SyceLdfzrAQnvvTjR%2FyZTeUv4Wt77Bu866XIdSdJN0%2Fhi1KZMkiCsxnosuhUfwmY02O7A6JvKnxOvkiJPMxq12FOeGVTlgAmpylVT%2FjZXJSVs6%2BdwQtoi%2FXWopTxDFgGvoKMnxKQmzfv7OUUQWCWRl9jPaBOv2ZDD55nVWFii3NPSRgOpyGet%2Bqcc5KprcE9lnxlmbhz5uKyGo7ZlUOsF%2FiK%2FkCPQ8ig0z%2BBIsX7jafrbiEMe5sUgzWvl8HQ4%2F2aaYgh06B87%2FyOXiq6R1QZHjdVD%2FgwDw02UD6KG3rjMMO8Jzk%2FwfJ%2BfPqUa37ML5WiKEi6VDHijzyw%2B9JjgCqpI4xTtzTnxdhlrBzX59nKJoCxVRUrcJp%2FDFr9jxVxHE8KOkxTD0bUfS4Be%2BxWy25K2y4g0HZCzERXvOjtjeP1ZCPaQclSb47CUJNzsCA%2F2p4Lxg%2BHABHHU7kj2%2BPjJzvVbMg0oyVSRkNPOGvz6MwvHan4p%2FwNZN5iiN5P8pjKzsA59HPcnWK%2Fb9HZcUUqtTAF7TrxSCTQ7tQPHEYcphfn9GlEnfE6IZ%2FsCAzCp2o%2FDBjqkAeNATPDCCiZlkIbEw7W7ah6oTJ8zqFq1ngKAvVi57eTXVwUTMvuupDgiDFGdI4eqmeaZifl6CIP1g5eYFhZ1xLOxYPHWW2qq3ASVtgJue2jPzkcKyFAWgt%2B0usqXpW5ltcagg4zIEjtGc6a83HLAP1aQhGh1ha74N4eBRxFwLvFB4PxwJP4loLhG1N%2FMd7Ls6SjNzF5cyFimSojA8sykUUhXr0Vs&X-Amz-Signature=a500cf4e5f065adae8c422e9829924ebc532dffeb3a135f5087802e4caaacfee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
