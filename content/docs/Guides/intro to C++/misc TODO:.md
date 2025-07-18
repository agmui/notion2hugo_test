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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4N6UYE%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDZOO1aeLwJJplGNoczduCTJsOvrZt25%2Bmf7t0Y%2BlKitgIgRfubBavJgL3jM5j2ZOcie%2Bc%2BrJY6IyyfhX8NrJM3RrwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB40YZO0mMH86%2F94aCrcA6qQrzhc4RzC0Fg0JN9Aal2CzlJZim46AASi39%2FXmk8J3eciwTF44T890cqadRkCuETXLj9EfBn4FTjlFmk%2BHgVCenrzFKEIeX7NyVV%2BbDx3tyVTPmHGLS5KYbUXEO4hnqybH21D7%2B5hRNhf4JkHE8SlmiT9smfRbvHiv92CCrjb6mpI0Itp9L8mtRyDYLEqy5h7W%2Bi%2FEf2GHFIDfN56yLoF09XAcESnGHxhZnwvd2iYukdd2RXYPKQJUZNCuEgXgBHcv3%2BEy9ehbFlbvCYDJzARdjzjAzQOxnct%2F3dIyKKidnBVOCUErx4ye8z84behdi6PqWHcS1WMlkrZWq42HLQpE7Srl6sbah%2FbGxUxLCs3w%2F0h%2FxznUpHmtqc6g%2F8%2FLpqmkyb2tqUHfvg6HJh3mIQC8bFGSeMru8CVzmeHk%2BK4yPR2QDtWZuEygxTA5nuTTAgv%2F0R5puNiyiu6ZYIVrysPbp4aPwgNEyiH%2BqlVkNqHHfZZhUHe%2BKC2b2zQDZBNBiObQa4DhEtnMvxAm7%2Fo98l1rU5xVSlYd9WVW2z%2FSil2sQEyn9PO4GKehcY5IWEJLiY9JduS3lTd6kHWK%2Bxit%2BU9%2ByzJbvcqtXxyN3lJMSPby6Q%2Bjidm7oKNTeC3MKiJ58MGOqUB3iJRgnR%2BJV42YVN0HxLEIq1J5gP8jwP5WFb5hlmCKXFDpNu5f4J3zDO%2FZaDOpUbZWYNh6mMWz3G2Tmv%2B9BWdhimmBpneRh1Fdn8JxXYuPL3jrEUqxlju9rCqpl%2BSSwBGWDS47OSe6FLRa1KAP8jYv0%2BvbiPAqzPjml0pNjYu1jSik7frJTHj7i9HJkgYhD7jlBLTOXqHBnJ6QlQet6FpefFLyM9k&X-Amz-Signature=c528f40ddeca8956db1aab82e0556a296ca4ed79aaa40a4c59df1cf7531146d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4N6UYE%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDZOO1aeLwJJplGNoczduCTJsOvrZt25%2Bmf7t0Y%2BlKitgIgRfubBavJgL3jM5j2ZOcie%2Bc%2BrJY6IyyfhX8NrJM3RrwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB40YZO0mMH86%2F94aCrcA6qQrzhc4RzC0Fg0JN9Aal2CzlJZim46AASi39%2FXmk8J3eciwTF44T890cqadRkCuETXLj9EfBn4FTjlFmk%2BHgVCenrzFKEIeX7NyVV%2BbDx3tyVTPmHGLS5KYbUXEO4hnqybH21D7%2B5hRNhf4JkHE8SlmiT9smfRbvHiv92CCrjb6mpI0Itp9L8mtRyDYLEqy5h7W%2Bi%2FEf2GHFIDfN56yLoF09XAcESnGHxhZnwvd2iYukdd2RXYPKQJUZNCuEgXgBHcv3%2BEy9ehbFlbvCYDJzARdjzjAzQOxnct%2F3dIyKKidnBVOCUErx4ye8z84behdi6PqWHcS1WMlkrZWq42HLQpE7Srl6sbah%2FbGxUxLCs3w%2F0h%2FxznUpHmtqc6g%2F8%2FLpqmkyb2tqUHfvg6HJh3mIQC8bFGSeMru8CVzmeHk%2BK4yPR2QDtWZuEygxTA5nuTTAgv%2F0R5puNiyiu6ZYIVrysPbp4aPwgNEyiH%2BqlVkNqHHfZZhUHe%2BKC2b2zQDZBNBiObQa4DhEtnMvxAm7%2Fo98l1rU5xVSlYd9WVW2z%2FSil2sQEyn9PO4GKehcY5IWEJLiY9JduS3lTd6kHWK%2Bxit%2BU9%2ByzJbvcqtXxyN3lJMSPby6Q%2Bjidm7oKNTeC3MKiJ58MGOqUB3iJRgnR%2BJV42YVN0HxLEIq1J5gP8jwP5WFb5hlmCKXFDpNu5f4J3zDO%2FZaDOpUbZWYNh6mMWz3G2Tmv%2B9BWdhimmBpneRh1Fdn8JxXYuPL3jrEUqxlju9rCqpl%2BSSwBGWDS47OSe6FLRa1KAP8jYv0%2BvbiPAqzPjml0pNjYu1jSik7frJTHj7i9HJkgYhD7jlBLTOXqHBnJ6QlQet6FpefFLyM9k&X-Amz-Signature=9fa0ef941c207f00bc90dc7b94b57e094fc08f0d413fbdbc385af495215ab9e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
